import React, { useState } from 'react';

function EvaluationForm({ peer }) {
    const [score, setScore] = useState(5);
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Evaluating ${peer.name} with score: ${score} and comment: "${comment}"`);
        // Here you would typically handle the submission e.g., send to an API
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Evaluating: {peer.name}</h3>
            <label>
                Score:
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={score}
                    onChange={e => setScore(e.target.value)}
                />
            </label>
            <label>
                Comment:
                <textarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
            </label>
            <button type="submit">Submit Evaluation</button>
        </form>
    );
}

export default EvaluationForm;
