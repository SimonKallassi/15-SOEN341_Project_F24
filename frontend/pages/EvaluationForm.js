import React, { useState } from "react";
import axios from "axios";


function EvaluationForm({ peer, classId, evaluatorId, teamId, onClose }) {
    // State for ratings
    const [ratings, setRatings] = useState({
        cooperation: 5,
        conceptualContribution: 5,
        practicalContribution: 5,
        workEthic: 5,
    });

    // State for the overall comment
    const [comment, setComment] = useState("");

    const [submitted, setSubmitted] = useState(false); // State for confirmation

    // Handle rating changes
    const handleRatingChange = (dimension, value) => {
        setRatings((prev) => ({ ...prev, [dimension]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const evaluationData = {
            team_id: teamId, // Replace with dynamic team ID
            classroom_id: classId, // Replace with dynamic classroom ID
            evaluator_id: evaluatorId, // Replace with logged-in user's ID
            evaluated_id: peer.id, // The ID of the team member being evaluated
            cooperation: ratings.cooperation,
            conceptual_contribution: ratings.conceptualContribution,
            practical_contribution: ratings.practicalContribution,
            work_ethic: ratings.workEthic,
            comments: comment,
        };

        try {
            const response = await axios.post("http://localhost:8000/submit_evaluation", evaluationData);
            console.log("Evaluation submitted:", response.data);
            setSubmitted(true); // Show confirmation
        } catch (error) {
            console.error("Error submitting evaluation:", error);
        }
    };

    console.log("sel member:", peer);
    console.log("class id:", classId);
    console.log("Team id:", teamId);
    console.log("Evaluator:", evaluatorId);

    if (submitted) {
        // Confirmation Page
        return (
            <div style={styles.container}>
                <h3 style={styles.heading}>Peer Assessment Submitted</h3>
                <p style={styles.text}>You have successfully evaluated {peer.name}.</p>
                <button onClick={onClose} style={styles.cancelButton}>
                    Close
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={styles.container}>
            <h3 style={styles.heading}>Evaluating: {peer.name}</h3>

            {/* Evaluation Table */}
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.tableHeader}>Dimension</th>
                    <th style={styles.tableHeader}>Rating (1-5)</th>
                </tr>
                </thead>
                <tbody>
                {[
                    { key: "cooperation", label: "Cooperation" },
                    { key: "conceptualContribution", label: "Conceptual Contribution" },
                    { key: "practicalContribution", label: "Practical Contribution" },
                    { key: "workEthic", label: "Work Ethic" },
                ].map((dimension) => (
                    <tr key={dimension.key}>
                        <td style={styles.tableCell}>{dimension.label}</td>
                        <td style={styles.tableCell}>
                            <input
                                type="number"
                                min="1"
                                max="5"
                                value={ratings[dimension.key]}
                                onChange={(e) =>
                                    handleRatingChange(dimension.key, Number(e.target.value))
                                }
                                style={styles.input}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Single Comment Box */}
            <div style={{ marginBottom: "20px" }}>
                <label style={styles.text}>
                    <strong>Additional Comments:</strong>
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Enter any additional feedback here..."
                    style={styles.textarea}
                />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button type="submit" style={styles.submitButton}>
                    Submit Evaluation
                </button>
                <button type="button" onClick={onClose} style={styles.cancelButton}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

const styles = {
    container: {
        color: "white",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "0 auto",
    },
    heading: {
        color: "white",
        fontSize: "1.5em",
        marginBottom: "20px",
    },
    text: {
        color: "white",
        marginBottom: "10px",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    },
    tableHeader: {
        textAlign: "left",
        padding: "10px",
        borderBottom: "2px solid white",
        color: "white",
    },
    tableCell: {
        padding: "10px",
        borderBottom: "1px solid white",
        color: "white",
    },
    input: {
        width: "50px",
        textAlign: "center",
        backgroundColor: "#333",
        color: "white",
        border: "1px solid white",
        borderRadius: "4px",
    },
    textarea: {
        width: "100%",
        height: "100px",
        backgroundColor: "#333",
        color: "white",
        border: "1px solid white",
        borderRadius: "4px",
        padding: "10px",
    },
    submitButton: {
        padding: "10px 20px",
        backgroundColor: "#002c03",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    cancelButton: {
        padding: "10px 20px",
        backgroundColor: "#430400",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default EvaluationForm;
