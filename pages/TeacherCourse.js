import React, { useState } from 'react';
import Link from 'next/link';
import StudentDetails from './StudentDetails';

function StudentList({ students }) {
    const [selectedStudent, setSelectedStudent] = useState(null);
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
            setPopupOpen(false); // Close the popup
            setSelectedStudents(new Set()); // Reset selected students
        }
    };

    return (
        <div className="container-student">
            <h1 className="h1">Students Enrolled</h1>
            <button onClick={togglePopup}>Create Teams</button>

            <div>
                {students.map(student => (
                    <div
                        key={student.id}
                        onClick={() => setSelectedStudent(student)}
                        className="student-item"
                        style={{ backgroundImage: 'url(${student.imagePath})' }}
                    >
                        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>
                            {student.name}
                        </div>
                    </div>
                ))}
            </div>

            {selectedStudent && <StudentDetails student={selectedStudent} />}

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Create Team</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h3>Select Students:</h3>
                                {students.map(student => (
                                    <div key={student.id}>
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
                            </div>
                            <button type="submit">Create Team</button>
                            <button type="button" onClick={togglePopup}>
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <h2>Teams List:</h2>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>
                        Team {index + 1}: {team.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;