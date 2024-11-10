import React, { useState, useEffect } from 'react';
import CourseList from './TeacherCourseList';
import axios from 'axios';

const TeacherDash = () => {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newCourseName, setNewCourseName] = useState('');
    const [showSuccessBanner, setShowSuccessBanner] = useState(false);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const userEmail = localStorage.getItem("user_email");
                const response = await axios.get('http://127.0.0.1:8000/classrooms', {
                    params: { user_email: userEmail },
                });
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses", error);
            }
        }
        fetchCourses();
    }, []);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 id="dashboard-title" style={styles.headerTitle}>Welcome to the Instructor Dashboard</h1>
            </header>
            {showSuccessBanner && <div style={styles.successBanner}>Course created successfully!</div>}
            <CourseList courses={courses} setCourses={setCourses} />
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '20px',
        borderBottom: '2px solid #eee',
        marginBottom: '20px',
    },
    headerTitle: {
        fontSize: '28px',
        fontWeight: '700',
    },
    successBanner: {
        padding: '12px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '5px',
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px',
    },
};

export default TeacherDash;
