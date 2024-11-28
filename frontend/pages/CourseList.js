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
                  <select>
                    <option>Sort by course name</option>
                    <option>Sort by date</option>
                  </select>
                  <select>
                    <option>Card</option>
                    <option>List</option>
                  </select>
                </div>
              </div>

              {/* Display each course1212 */}
              {courses.map(course => (
                  <div key={course.classroom_id} id="course">
                      {/* Using Next.js Link for navigation */}
                      <Link href={`/${course.classroom_id}`}>
                          <span>
                              <h2>{course.classroom_name}</h2>
                              <p>Classroom ID: {course.classroom_id}</p>
                          </span>
                      </Link>
                  </div>
              ))}
            </div>
        </div>
    );
}

export default CourseList;
