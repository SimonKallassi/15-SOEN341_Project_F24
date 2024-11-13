import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

function CourseList({ courses, setCourses }) {
    const [showModal, setShowModal] = useState(false);
    const [newCourseName, setNewCourseName] = useState('');

    const handleCreateCourseClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setNewCourseName('');
    };

    const handleCreateCourse = async () => {
        try {
            const userEmail = localStorage.getItem("user_email");
            const response = await axios.post('http://127.0.0.1:8000/create_classroom', {
                classroom_name: newCourseName,
                user_email: userEmail,
            });
            const newCourse = {
                id: response.data.classroom_id,
                name: newCourseName,
                description: 'New Course Description',
            };
            setCourses([...courses, newCourse]);
            setShowModal(false);
            setNewCourseName('');
        } catch (error) {
            console.error("Error creating course", error);
        }
    };

    const handleDeleteCourse = async (courseId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/delete_classroom/${courseId}`);
            setCourses(courses.filter(course => course.id !== courseId));
        } catch (error) {
            console.error("Error deleting course", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Course Overview</h2>
            <button onClick={handleCreateCourseClick} style={styles.createButton}>Create Course</button>
            {courses.map((course) => (
                <div key={course.id} id="course" style={styles.courseCard}>
                    <Link href={`/${course.id}`}>
                        <span>
                            <h2 style={styles.courseName}>{course.name}</h2>
                            <p style={styles.courseDescription}>{course.description}</p>
                        </span>
                    </Link>
                    <button onClick={() => handleDeleteCourse(course.id)} style={styles.deleteButton}>Delete</button>
                </div>
            ))}
            {showModal && (
                <div style={styles.modal}>
                    <h3 style={styles.modalTitle}>Create New Course</h3>
                    <input
                        type="text"
                        placeholder="Enter course name"
                        value={newCourseName}
                        onChange={(e) => setNewCourseName(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleCreateCourse} style={styles.createButton}>Create</button>
                    <button onClick={handleModalClose} style={styles.cancelButton}>Cancel</button>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    createButton: {
        marginTop: '20px',
        marginBottom: '20px',
        border: 'none',
        width: '130px',
        borderRadius: '8px',
        backgroundColor: '#61C0BF',
        fontSize: '16px',
        color: '#fff',
        fontWeight: 'bold',
        height: '30px',
        cursor: 'pointer',
    },
    courseCard: {
        border: '1px solid #ddd',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '10px',
        backgroundColor: '#fff',
    },
    courseName: {
        fontSize: '18px',
        fontWeight: '600',
    },
    courseDescription: {
        fontSize: '14px',
        color: '#666',
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    modal: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
    modalTitle: {
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        marginBottom: '10px',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default CourseList;