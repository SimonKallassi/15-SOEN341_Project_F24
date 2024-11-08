import Link from 'next/link';
import React, { useState } from 'react';

function CourseList({ courses }) {
    const [showModal, setShowModal] = useState(false);
    const [newCourseName, setNewCourseName] = useState('');

    const handleCreateCourseClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setNewCourseName('');
    };

    const handleCreateCourse = () => {
        console.log("Creating course with name:", newCourseName);
        handleModalClose();
    };

    return (
        <div>
            <div id="out">
                <div id="course-filtering">
                    <h2>Course Overview</h2>
                    <div className="filters">
                        <select>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                        </select>
                        <input type="text" placeholder="Search" />
                        <select>
                            <option>Sort by course name</option>
                            <option>Sort by date</option>
                        </select>
                        <select>
                            <option>Card</option>
                            <option>List</option>
                        </select>
                        <button
                            onClick={handleCreateCourseClick}
                            style={{
                                marginTop: '20px',
                                marginLeft: '20px',
                                border: 'none',
                                textAlign: 'center',
                                width: '130px',
                                borderRadius: '8px',
                                backgroundColor: '#61C0BF',
                                fontSize: '16px',
                                color: '#fff',
                                fontWeight: 'bold',
                                height: '30px',
                                cursor: 'pointer',
                            }}
                        >
                            Create Course
                        </button>
                    </div>
                </div>
                {courses.map((course) => (
                    <div key={course.id} id="course">
                        {/* Using Next.js Link for navigation */}
                        <Link href={`/${course.id}`}>
                            <span>
                                <h2>{course.name}</h2>
                                <p>{course.description}</p>
                            </span>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Modal for creating course */}
            {showModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '300px',
                            textAlign: 'center',
                        }}
                    >
                        <h3>Create New Course</h3>
                        <input
                            type="text"
                            placeholder="Enter course name"
                            value={newCourseName}
                            onChange={(e) => setNewCourseName(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                margin: '10px 0',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <button
                                onClick={handleModalClose}
                                style={{
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    backgroundColor: '#ccc',
                                    cursor: 'pointer',
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateCourse}
                                style={{
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    backgroundColor: '#61C0BF',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CourseList;
