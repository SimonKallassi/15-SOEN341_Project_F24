import React, { useState } from 'react';
import axios from 'axios';

function StudentList({ students }) {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState(new Set());
    const [teams, setTeams] = useState([]);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleCheckboxChange = (studentId) => {
        const newSelectedStudents = new Set(selectedStudents);
        if (newSelectedStudents.has(studentId)) {
            newSelectedStudents.delete(studentId);
        } else {
            newSelectedStudents.add(studentId);
        }
        setSelectedStudents(newSelectedStudents);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const teamMembers = Array.from(selectedStudents);
        if (teamMembers.length > 0) {
            setTeams([...teams, teamMembers]);
            setPopupOpen(false);
            setSelectedStudents(new Set());
        }
    };

    return (
        <div className="container-student" style={styles.container}>
            <button id="create-teams" onClick={togglePopup} style={styles.createButton}>Create Teams</button>
            <div style={styles.teamList}>
                <h2 style={styles.teamListTitle}>Teams List:</h2>
                {teams.map((team, index) => (
                    <div key={index} style={styles.teamItem}>
                        Team {index + 1}: {team.join(', ')}
                    </div>
                ))}
            </div>
            <h1 style={styles.enrolledTitle}>Students Enrolled</h1>
            <div>
                {students.map(student => (
                    <div
                        key={student.id}
                        className="student-item"
                        style={styles.studentItem}>
                        {student.name}
                    </div>
                ))}
            </div>
            {isPopupOpen && (
                <div className="popup-overlay" style={styles.popupOverlay}>
                    <div className="popup" style={styles.popup}>
                        <h2 style={styles.popupTitle}>Create Team</h2>
                        <form onSubmit={handleSubmit}>
                            <h3 style={styles.popupSubtitle}>Select Students:</h3>
                            {students.map(student => (
                                <div key={student.id} style={styles.checkboxContainer}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedStudents.has(student.id)}
                                            onChange={() => handleCheckboxChange(student.id)}
                                        />
                                        {student.name}
                                    </label>
                                </div>
                            ))}
                            <button type="submit" style={styles.submitButton}>Create Team</button>
                            <button type="button" onClick={togglePopup} style={styles.cancelButton}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    createButton: {
        backgroundColor: '#61C0BF',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    teamList: {
        marginBottom: '20px',
    },
    teamListTitle: {
        fontSize: '18px',
        fontWeight: '600',
    },
    teamItem: {
        backgroundColor: '#f0f0f0',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
    },
    enrolledTitle: {
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    studentItem: {
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    popupOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    popupTitle: {
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '15px',
    },
    popupSubtitle: {
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    checkboxContainer: {
        marginBottom: '10px',
    },
    submitButton: {
        backgroundColor: '#61C0BF',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginRight: '10px',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default StudentList;