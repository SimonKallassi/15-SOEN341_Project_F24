import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function TeacherCourse({ students }) {
    const router = useRouter();
    const { courseId } = router.query;
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState(new Set());
    const [teams, setTeams] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [expandedTeamId, setExpandedTeamId] = useState(null);
    const [teamEvaluations, setTeamEvaluations] = useState({});

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

    useEffect(() => {
        if (!courseId) return;

        axios
            .get(`http://localhost:8000/get_teams/${courseId}`)
            .then((response) => {
                setTeamData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching teams:", error);
            });
    }, [courseId]);

    const fetchTeamEvaluations = (teamId) => {
        if (teamEvaluations[teamId]) {
            setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
            return;
        }

        axios
            .get(`http://localhost:8000/get_team_evaluations/${teamId}`)
            .then((response) => {
                setTeamEvaluations((prev) => ({
                    ...prev,
                    [teamId]: response.data,
                }));
                setExpandedTeamId(teamId);
            })
            .catch((error) => {
                console.error("Error fetching team evaluations:", error);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const teamMembers = Array.from(selectedStudents);
        if (teamMembers.length > 0) {
            try {
                await axios.post("http://localhost:8000/create_team", {
                    classroom_id: courseId,
                    team_members: Array.from(selectedStudents).map(Number),
                });
                setPopupOpen(false);
                setSelectedStudents(new Set());
            } catch (error) {
                console.error("Error creating team:", error);
            }
        }
    };

    return (
        <div className="container-student" style={styles.container}>
            <button id="create-teams" onClick={togglePopup} style={styles.createButton}>
                Create Teams
            </button>
            <div style={styles.teamList}>
                <h2 style={styles.teamListTitle}>Teams List:</h2>
                {teamData.map((team) => (
                    <div key={team.team_id} style={styles.teamItem}>
                        <strong>Team ID: {team.team_id}</strong>
                        <button
                            style={styles.viewAssessmentsButton}
                            onClick={() => fetchTeamEvaluations(team.team_id)}
                        >
                            View Assessments
                        </button>
                        {expandedTeamId === team.team_id && teamEvaluations[team.team_id] && (
                            <div style={styles.assessmentsContainer}>
                                <h3>Team Assessments</h3>
                                {Object.entries(teamEvaluations[team.team_id]).map(
                                    ([evaluatedId, details]) => (
                                        <div key={evaluatedId} style={styles.studentAssessment}>
                                            <h4>Evaluated Student ID: {evaluatedId}</h4>
                                            <table style={styles.evaluationsTable}>
                                                <thead>
                                                <tr>
                                                    <th>Evaluator ID</th>
                                                    <th>Cooperation</th>
                                                    <th>Conceptual Contribution</th>
                                                    <th>Practical Contribution</th>
                                                    <th>Work Ethic</th>
                                                    <th>Comments</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {details.evaluations.map((evaluation, index) => (
                                                    <tr key={index}>
                                                        <td>{evaluation.evaluator_id}</td>
                                                        <td>{evaluation.cooperation}</td>
                                                        <td>{evaluation.conceptual_contribution}</td>
                                                        <td>{evaluation.practical_contribution}</td>
                                                        <td>{evaluation.work_ethic}</td>
                                                        <td>{evaluation.comments}</td>
                                                    </tr>
                                                ))}
                                                <tr style={styles.averageRow}>
                                                    <td>Average</td>
                                                    <td>{details.averages.cooperation}</td>
                                                    <td>
                                                        {details.averages.conceptual_contribution}
                                                    </td>
                                                    <td>
                                                        {details.averages.practical_contribution}
                                                    </td>
                                                    <td>{details.averages.work_ethic}</td>
                                                    <td>-</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <h1 style={styles.enrolledTitle}>Students Enrolled</h1>
            <div>
                {students.map((student) => (
                    <div
                        key={student.id}
                        className="student-item"
                        style={styles.studentItem}
                    >
                        <span style={styles.studentName}>{student.name}</span>
                    </div>
                ))}
            </div>
            {isPopupOpen && (
                <div className="popup-overlay" style={styles.popupOverlay}>
                    <div className="popup" style={styles.popup}>
                        <h2 style={styles.popupTitle}>Create Team</h2>
                        <form onSubmit={handleSubmit}>
                            <h3 style={styles.popupSubtitle}>Select Students:</h3>
                            {students.map((student) => (
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
                            <button type="submit" style={styles.submitButton}>
                                Create Team
                            </button>
                            <button type="button" onClick={togglePopup} style={styles.cancelButton}>
                                Cancel
                            </button>
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
        margin: '10px 0',
    },
    viewAssessmentsButton: {
        backgroundColor: '#FFA726',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
    assessmentsContainer: {
        marginTop: '10px',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '5px',
    },
    studentAssessment: {
        marginBottom: '20px',
    },
    evaluationsTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    },
    averageRow: {
        fontWeight: 'bold',
        backgroundColor: '#e0e0e0',
    },
    enrolledTitle: {
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    studentItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px 0',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    studentName: {
        fontWeight: '500',
        fontSize: '16px',
    },
};

export default TeacherCourse;
