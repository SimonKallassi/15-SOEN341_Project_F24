import React, { useState } from 'react';
import StudentDetails from './StudentDetails';

function StudentList({ students = [] }) { // Default to an empty array if students is undefined
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="container-student">
            <h1 className="h1">Students Enrolled</h1>
            <div>
                {students.map(student => (
                    <div key={student.id} onClick={() => setSelectedStudent(student)} className="student-item">
                        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>{student.name}</div>
                    </div>
                ))}
            </div>
            {selectedStudent && <StudentDetails student={selectedStudent} />}
        </div>
    );
}

export default StudentList;