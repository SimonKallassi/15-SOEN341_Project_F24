// src/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css'; // Make sure you have your CSS file for styling

function StudentDashboard() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        // Simulate fetching courses data
        const mockCourses = [
            { id: 1, name: "Mathematics", students: [{ id: 'm1', name: "Alice" }, { id: 'm2', name: "Bob" }] },
            { id: 2, name: "Science", students: [{ id: 's1', name: "Charlie" }, { id: 's2', name: "David" }] }
        ];
        setCourses(mockCourses);
    }, []);

    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
    };

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <h1>Student Dashboard</h1>
            <button onClick={handleLogout} className="logout-button">Logout</button>
            <h2>Your Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id} className="course-item" onClick={() => handleSelectCourse(course)}>
                        {course.name}
                    </li>
                ))}
            </ul>
            {selectedCourse && (
                <div>
                    <h3>Students in {selectedCourse.name}</h3>
                    <ul>
                        {selectedCourse.students.map(student => (
                            <li key={student.id} className="student-item">
                                {student.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default StudentDashboard;
