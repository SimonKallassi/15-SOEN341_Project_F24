import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const TeacherDashboard = () => {
    const [classrooms, setClassrooms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newClassName, setNewClassName] = useState('');
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [classroomMembers, setClassroomMembers] = useState([]);
    const [showGroupingModal, setShowGroupingModal] = useState(false);
    const [groupSize, setGroupSize] = useState('');
    const [groupedMembers, setGroupedMembers] = useState([]);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push('/');
    };

    useEffect(() => {
        async function fetchClassrooms() {
            try {
                const userEmail = localStorage.getItem("user_email"); // Retrieve the email stored locally
                const response = await axios.get('http://127.0.0.1:8000/classrooms', {
                    params: { user_email: userEmail },
                });
                setClassrooms(response.data);
            } catch (error) {
                console.error("Error fetching classrooms", error);
            }
        }
        fetchClassrooms();
    }, []);
    const handleCreateClassroom = async () => {
        try {
            const userEmail = localStorage.getItem("user_email");  // Retrieve stored email
            const response = await axios.post('http://127.0.0.1:8000/create_classroom', {
                classroom_name: newClassName,
                user_email: userEmail
            });

            // Ensure that response data includes the classroom name and other details
            const newClassroom = {
                classroom_id: response.data.classroom_id,
                classroom_name: newClassName // Set the name here
            };

            // Add the new classroom to the list and reset fields
            setClassrooms([...classrooms, newClassroom]);
            setShowModal(false);
            setNewClassName('');
            setShowSuccessBanner(true);

            setTimeout(() => {
                setShowSuccessBanner(false);
            }, 3000);
        } catch (error) {
            console.error("Error creating classroom", error);
        }
    };

    const handleDeleteClassroom = async (classroom_id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/delete_classroom/${classroom_id}`);
            // Remove deleted classroom from state
            setClassrooms(classrooms.filter(classroom => classroom.classroom_id !== classroom_id));
        } catch (error) {
            console.error("Error deleting classroom", error);
        }
    };


    const handleViewClassroom = async (classroomId, classroomName) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/classroom_members/${classroomId}`);
            setSelectedClassroom({ id: classroomId, name: classroomName });
            setClassroomMembers(response.data.members);
            setGroupedMembers([]);  // Reset groups when switching classrooms
        } catch (error) {
            console.error("Error fetching classroom members", error);
        }
    };

    const handleGroupMembers = () => {
        const size = parseInt(groupSize, 10);
        if (!size || size <= 0) {
            alert("Please enter a valid group size.");
            return;
        }

        const grouped = [];
        for (let i = 0; i < classroomMembers.length; i += size) {
            grouped.push(classroomMembers.slice(i, i + size));
        }
        setGroupedMembers(grouped);
        setShowGroupingModal(false);
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.headerTitle}>Teacher Dashboard</h1>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </header>

            {showSuccessBanner && <div style={styles.successBanner}>Classroom created successfully!</div>}

            <main style={styles.main}>
                <button style={styles.createButton} onClick={() => setShowModal(true)}>Create New Classroom</button>

                <div style={styles.classroomList}>
                    {classrooms.map((classroom) => (
                        <div key={classroom.classroom_id} style={styles.classroomCard}>
                            <h2 style={styles.classroomName}>{classroom.classroom_name}</h2>
                            <p style={styles.classroomId}>ID: {classroom.classroom_id}</p>
                            <button onClick={() => handleDeleteClassroom(classroom.classroom_id)}
                                    style={styles.deleteButton}>Delete
                            </button>
                            <button style={styles.viewButton}
                                    onClick={() => handleViewClassroom(classroom.classroom_id, classroom.classroom_name)}>View
                                Classroom
                            </button>
                        </div>
                    ))}
                </div>

                {showModal && (
                    <div style={styles.modal}>
                        <h2 style={styles.modalTitle}>Create New Classroom</h2>
                        <input
                            type="text"
                            placeholder="Classroom Name"
                            value={newClassName}
                            onChange={(e) => setNewClassName(e.target.value)}
                            style={styles.input}
                        />
                        <button onClick={handleCreateClassroom} style={styles.createButton}>Create</button>
                        <button onClick={() => setShowModal(false)} style={styles.cancelButton}>Cancel</button>
                    </div>
                )}

                {selectedClassroom && (
                    <div style={styles.membersModal}>
                        <h2 style={styles.modalTitle}>Members of {selectedClassroom.name}</h2>
                        <ul style={styles.memberList}>
                            {classroomMembers.map((member) => (
                                <li key={member.id} style={styles.memberItem}>
                                    {member.name} - {member.role}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setShowGroupingModal(true)} style={styles.groupButton}>Group Members</button>
                        <button onClick={() => setSelectedClassroom(null)} style={styles.closeButton}>Close</button>
                    </div>
                )}

                {showGroupingModal && (
                    <div style={styles.modal}>
                        <h2 style={styles.modalTitle}>Set Group Size</h2>
                        <input
                            type="number"
                            placeholder="Enter group size"
                            value={groupSize}
                            onChange={(e) => setGroupSize(e.target.value)}
                            style={styles.input}
                        />
                        <button onClick={handleGroupMembers} style={styles.createButton}>Create Groups</button>
                        <button onClick={() => setShowGroupingModal(false)} style={styles.cancelButton}>Cancel</button>
                    </div>
                )}

                {groupedMembers.length > 0 && selectedClassroom && (
                    <div style={styles.groupsContainer}>
                        <h2 style={styles.groupHeader}>Groups for {selectedClassroom.name}</h2>
                        {groupedMembers.map((group, index) => (
                            <div key={index} style={styles.group}>
                                <h3 style={styles.groupTitle}>Group {index + 1}</h3>
                                <ul style={styles.memberList}>
                                    {group.map((member) => (
                                        <li key={member.id} style={styles.memberItem}>
                                            {member.name} - {member.role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '20px',
        borderBottom: '2px solid #eee',
        marginBottom: '20px',
    },
    headerTitle: {
        fontSize: '28px',
        fontWeight: '700',
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
        border: 'none',
        padding: '10px 20px',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    createButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        alignSelf: 'flex-start',
    },
    classroomList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
    },
    classroomCard: {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '8px',
        width: '220px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    classroomName: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '8px',
    },
    classroomId: {
        color: '#666',
        fontSize: '14px',
    },
    viewButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '14px',
    },
    successBanner: {
        padding: '12px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px',
    },
    membersModal: {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
    },
    modalTitle: {
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '15px',
    },
    memberList: {
        listStyleType: 'none',
        padding: 0,
    },
    memberItem: {
        padding: '8px 0',
        fontSize: '16px',
        color: '#555',
    },
    groupButton: {
        backgroundColor: '#ff8c00',
        color: '#fff',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        marginTop: '10px',
    },
    closeButton: {
        backgroundColor: '#bbb',
        color: '#fff',
        border: 'none',
        padding: '8px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        marginTop: '10px',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '320px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    groupsContainer: {
        padding: '20px',
        marginTop: '20px',
        backgroundColor: '#f0f0f5',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    groupHeader: {
        fontSize: '18px',
        fontWeight: '700',
        marginBottom: '15px',
        color: '#333',
    },
    group: {
        marginBottom: '15px',
    },
    groupTitle: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#555',
        marginBottom: '5px',
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
};

export default TeacherDashboard;
