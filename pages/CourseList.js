import Link from 'next/link';
import React from 'react';



function CourseList({ courses }) {
    return (
        <div>
            <div id="out">
            <h1>Course Overview</h1>
            <div className="filters flex space-x-4">
            <select className="border border-gray-300 p-2">
              <option value="all">All</option>
              <option value="completed">Completed</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-2"
            />
            <select className="border border-gray-300 p-2">
              <option>Sort by course name</option>
              <option>Sort by date</option>
            </select>
            <select className="border border-gray-300 p-2">
              <option>Card</option>
              <option>List</option>
            </select>
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
