import React, { useState } from 'react';

const students = [
  { id: 1, name: 'Fahad Abdul Rahman' },
  { id: 2, name: 'Oyeyimika Adeoye' },
  { id: 3, name: 'John Doe' },
  // Add more student objects as needed
];

const TeamCreate = () => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleCheckboxChange = (studentId) => {
    setSelectedStudents((prevSelected) =>
      prevSelected.includes(studentId)
        ? prevSelected.filter((id) => id !== studentId)
        : [...prevSelected, studentId]
    );
  };

  return (
    <div>
      <h2>Select Students for the Team</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={selectedStudents.includes(student.id)}
              onChange={() => handleCheckboxChange(student.id)}
            />
            <span style={{ marginLeft: '8px' }}>{student.name}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => console.log('Selected Students:', selectedStudents)}
        style={{ marginTop: '16px' }}
      >
        Confirm Selection
      </button>
    </div>
  );
};

export default TeamCreate;