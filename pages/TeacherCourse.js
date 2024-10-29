import React, { useState } from 'react';
import Link from 'next/link';
// Importing StudentDetails into the parent component
import StudentDetails from './StudentDetails';

//import './styles/styles.css'; // Make sure the path is correct

function StudentList({ students }) {
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="container-student">
            <h1 className="h1">Students Enrolled</h1>
            <Link href="/teamcreate">
                <button>Create Teams</button>
            </Link>
            <div>
                {students.map(student => (
                    <div key={student.id} onClick={() => setSelectedStudent(student)} className="student-item" style={{ backgroundImage: 'url(${student.imagePath})' }}>
                        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>{student.name}</div>
                    </div>
                ))}
            </div>
            {selectedStudent && <StudentDetails student={selectedStudent} />}
        </div>
    );
}

export default StudentList;