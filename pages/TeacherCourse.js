import React, { useState } from 'react';
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
            setPopupOpen(false);
            setSelectedStudents(new Set());
        }
    };

    return (
        <div className="container-student">
            <button id="create-teams" onClick={togglePopup}>Create Teams</button>
            <div className="team-list">
                <h2>Teams List:</h2>
                {teams.map((team, index) => (
                    <div key={index} className="team-item">
                        Team {index + 1}: {team.join(', ')}
                    </div>
                ))}
            </div>
            <h1 className="enrolled">Students Enrolled</h1>
            <div>
                {students.map(student => (
                    <div
                        key={student.id}
                        className="student-item"
                        style={{ backgroundImage: `url(${student.imagePath})` }}>
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
                                                onChange={() => handleCheckboxChange(student.id)}/>
                                            {student.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button type="submit">Create Team</button>
                            <button type="button" onClick={togglePopup}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentList;