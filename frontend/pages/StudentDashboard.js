import { useState, useEffect } from 'react';
import CourseList from './CourseList';
import axios from 'axios';

const App = ({ userEmail }) => {
  const [courses, setCourses] = useState([]);

  // GET request to fetch joined classes for a student
  useEffect(() => {
    if (!userEmail) return; // Ensure userEmail is provided before fetching

    axios.get(`http://localhost:8000/student_classrooms`, {
      params: { user_email: userEmail }
    })
    .then((response) => {
      setCourses(response.data.classes);
    })
    .catch((error) => {
      console.error("Error fetching joined classes:", error);
    });
  }, [userEmail]);

  return (
    <div>
      <h1 id="dashboard-title">Dashboard</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
