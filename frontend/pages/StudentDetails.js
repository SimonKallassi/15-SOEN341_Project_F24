import React, { useState } from 'react';
import { useRouter } from 'next/router';

function StudentDetails({ student }) {
    const router = useRouter();
    // Initialize ratings with default values if student.ratings doesn't exist
    const [ratings, setRatings] = useState([
        { category: 'Teamwork', score: student.ratings?.Teamwork || '' },
        { category: 'Communication', score: student.ratings?.Communication || '' },
        { category: 'Contribution', score: student.ratings?.Contribution || '' },
        { category: 'Professionalism', score: student.ratings?.Professionalism || '' },
        { category: 'Innovation', score: student.ratings?.Innovation || '' },
        { category: 'Dependability', score: student.ratings?.Dependability || '' }
    ]);

    const [maxScore, setMaxScore] = useState(5);  // Maximum score for the ratings

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

    // Function to save the ratings
    const handleSave = () => {

        const incompleteRatings = ratings.some(rating => rating.score === '' || rating.score === null);

    if (incompleteRatings) {
        alert("Please fill in all rating boxes before submitting.");
        return; // Stop the function here if any rating is empty
    }
    
        const userConfirmed = window.confirm("Are you sure you want to submit?");
        if (userConfirmed) {
          
            router.back();
        }
        // console.log('Saving ratings:', ratings);
        // Implement save functionality here
        // This could be an API call or local state update depending on your application setup
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
            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
}

export default StudentDetails;
