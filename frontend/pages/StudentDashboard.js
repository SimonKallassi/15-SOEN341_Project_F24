import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    const [joinedClasses, setJoinedClasses] = useState([]);
    const [selectedClassroom, setSelectedClassroom] = useState(null);
    const [classroomMembers, setClassroomMembers] = useState([]);
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [joinCode, setJoinCode] = useState('');
    const [error, setError] = useState('');


    // Fetch joined classes from backend
    useEffect(() => {
        async function fetchJoinedClasses() {
            try {
                const userEmail = localStorage.getItem("user_email");
                const response = await axios.get('http://127.0.0.1:8000/student_classrooms', {
                    params: { user_email: userEmail },
                });
                setJoinedClasses(response.data.classes);
            } catch (error) {
                console.error("Error fetching joined classes", error);
            }
        }
        fetchJoinedClasses();
    }, []);

    // Fetch members for the selected classroom
    const handleViewClassroom = async (classroomId, classroomName) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/classroom_members/${classroomId}`);
            setSelectedClassroom({ id: classroomId, name: classroomName });
            setClassroomMembers(response.data.members);
        } catch (error) {
            console.error("Error fetching classroom members", error);
        }
    };

    // Handle join class functionality
    const handleJoinClass = async () => {
        try {
            const userEmail = localStorage.getItem("user_email");
            const response = await axios.post('http://127.0.0.1:8000/join_class', {
                class_code: joinCode,
                user_email: userEmail,
            });
            setJoinedClasses([...joinedClasses, response.data]);
            setShowJoinModal(false);
            setJoinCode('');
            setError('');
        } catch (error) {
            setError("Failed to join the class. Please check the code.");
            console.error("Join class error:", error);
        }
    };

    return (
        <div style={styles.container}>
            {/* Sidebar for Joined Classes */}
            <aside style={styles.sidebar}>
                <h2>My Classes</h2>
                <ul style={styles.classList}>
                    {joinedClasses.map((classItem) => (
                        <li
                            key={classItem.classroom_id}
                            style={styles.classItem}
                            onClick={() => handleViewClassroom(classItem.classroom_id, classItem.classroom_name)}
                        >
                            {classItem.classroom_name}
                        </li>
                    ))}
                </ul>
                <button style={styles.joinButton} onClick={() => setShowJoinModal(true)}>Join New Class</button>
            </aside>

            {/* Main Content */}
            <main style={styles.main}>
                {selectedClassroom && (
                    <div style={styles.classDetails}>
                        <h2>Class: {selectedClassroom.name}</h2>
                        <div style={styles.memberSection}>
                            <h3>Teacher</h3>
                            <ul style={styles.memberList}>
                                {classroomMembers
                                    .filter(member => member.role === "teacher")
                                    .map((teacher) => (
                                        <li key={teacher.id} style={styles.teacherItem}>
                                            {teacher.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div style={styles.memberSection}>
                            <h3>Students</h3>
                            <ul style={styles.memberList}>
                                {classroomMembers
                                    .filter(member => member.role === "student")
                                    .map((student) => (
                                        <li key={student.id} style={styles.studentItem}>
                                            {student.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )}

                {/* Join Class Modal */}
                {showJoinModal && (
                    <div style={styles.modal}>
                        <h2>Join New Class</h2>
                        <input
                            type="text"
                            placeholder="Enter 8-digit code"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value)}
                            style={styles.input}
                        />
                        {error && <p style={styles.errorText}>{error}</p>}
                        <button onClick={handleJoinClass} style={styles.joinClassButton}>Join</button>
                        <button onClick={() => setShowJoinModal(false)} style={styles.cancelButton}>Cancel</button>
                    </div>
                )}
            </main>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
        width: '250px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRight: '1px solid #ddd',
    },
    classList: {
        listStyleType: 'none',
        padding: 0,
    },
    classItem: {
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
        fontSize: '16px',
        cursor: 'pointer',
    },
    main: {
        flex: 1,
        padding: '20px',
    },
    classDetails: {
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#fff',
    },
    memberSection: {
        marginTop: '20px',
    },
    memberList: {
        listStyleType: 'none',
        padding: 0,
    },
    teacherItem: {
        color: '#007bff',
        fontWeight: 'bold',
    },
    studentItem: {
        color: '#333',
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
    },
    input: {
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginBottom: '10px',
    },
    joinClassButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cancelButton: {
        backgroundColor: '#bbb',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    errorText: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default StudentDashboard;
