import React, { useState } from 'react';
// Importing StudentDetails into the parent component
import StudentDetails from './StudentDetails';

//import './styles/styles.css'; // Make sure the path is correct

function StudentList({ students }) {
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <div className="container-student">
            <h1 className="h1">Students Enrolled</h1>
            <div>
                {members_list.map(member => (
                    <div key={member.id} onClick={() => setSelectedStudent(member)} className="student-item" >
                        <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>{member.name}</div>
                    </div>
                ))}
            </div>
            {selectedStudent && <StudentDetails student={selectedStudent} />}
        </div>
    );
}

export default StudentList;
