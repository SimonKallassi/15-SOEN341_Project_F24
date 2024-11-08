import Link from 'next/link';
import React from 'react';



function CourseList({ courses }) {
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
                <input
                  type="text"
                  placeholder="Search"
                  
                />
                <select >
                  <option>Sort by course name</option>
                  <option>Sort by date</option>
                </select>
                <select >
                  <option>Card</option>
                  <option>List</option>
                </select>
                <button
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
                  cursor: 'pointer'
              }}>Create Course</button>
              </div>
          </div>
            {courses.map(course => (
                <div key={course.id} id="course">
                    {/* Using Next.js Link for navigation */}
                    <Link href={`/${course.id}`}>
                        <span >
                            <h2>{course.name}</h2>
                            <p>{course.description}</p>
                        </span>
                    </Link>
                </div>
            ))}
            </div>
        </div>

    );
}

export default CourseList;
