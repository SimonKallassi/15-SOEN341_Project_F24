import React, { useState } from 'react'; 
import { useRouter } from 'next/router';

function StudentDetails({ student }) {
    const router = useRouter();
    
    // Initialize ratings 
    const [ratings, setRatings] = useState([
        { category: 'Teamwork', score: student.ratings?.Teamwork || '' },
        { category: 'Communication', score: student.ratings?.Communication || '' },
        { category: 'Contribution', score: student.ratings?.Contribution || '' },
        { category: 'Professionalism', score: student.ratings?.Professionalism || '' },
        { category: 'Innovation', score: student.ratings?.Innovation || '' },
        { category: 'Dependability', score: student.ratings?.Dependability || '' }
    ]);

    const [comments, setComments] = useState({
        Ethics: student.comments?.Ethics || '',
        Communication: student.comments?.Communication || ''
    });

    const [maxScore] = useState(5);  // Maximum score 

    // Function to handle changes in ratings
    const handleRatingChange = (index, newScore) => {
        const updatedRatings = ratings.map((rating, idx) => {
            if (idx === index) {
                return { ...rating, score: newScore };
            }
            return rating;
        });
        setRatings(updatedRatings);
    };

    // Function to handle changes in comments
    const handleCommentChange = (category, newComment) => {
        setComments(prevComments => ({
            ...prevComments,
            [category]: newComment
        }));
    };

    // Function to save the ratings and comments
    const handleSave = () => {
        // Check if all rating fields are filled
        const incompleteRatings = ratings.some(rating => rating.score === '' || rating.score === null);

        if (incompleteRatings) {
            alert("Please fill in all rating boxes before submitting.");
            return; // Stop the function here if any rating is empty
        }

        const userConfirmed = window.confirm("Are you sure you want to submit?");
        if (userConfirmed) {
            console.log('Saving ratings:', ratings);
            console.log('Saving comments:', comments);
            
            // Add logic to save ratings and comments, e.g., API call

            router.back();
        }
    };

    return (
        <div className="student-details">
            <h2>Evaluate {student.name}</h2>
            {ratings.map((rating, index) => (
                <div key={index} className="rating">
                    <label>
                        {rating.category}:
                        <input
                            type="number"
                            min="1"
                            max={maxScore}
                            value={rating.score}
                            onChange={(e) => handleRatingChange(index, e.target.value)}
                            className="input-field"
                        />
                    </label>
                </div>
            ))}

            <div className="comments">
                <h3>Comments</h3>
                <div className="comment-box">
                    <label>
                        Ethics:
                        <textarea
                            value={comments.Ethics}
                            onChange={(e) => handleCommentChange('Ethics', e.target.value)}
                            className="input-field"
                        />
                    </label>
                </div>
                <div className="comment-box">
                    <label>
                        Communication:
                        <textarea
                            value={comments.Communication}
                            onChange={(e) => handleCommentChange('Communication', e.target.value)}
                            className="input-field"
                        />
                    </label>
                </div>
            </div>

            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
}

export default StudentDetails;
