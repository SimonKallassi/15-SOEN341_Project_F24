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
