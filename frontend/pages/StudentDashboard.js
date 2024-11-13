import { useState, useEffect } from 'react';
import CourseList from './CourseList';
import axios from 'axios';

const App = ({ userEmail }) => {
  const [courses, setCourses] = useState([]);

  // GET request to fetch joined classes for a student
  useEffect(() => {
    async function fetchCourses() {
      try {
        // Retrieve user email from localStorage
        const userEmail = localStorage.getItem("user_email");
        if (!userEmail) {
          setError("User email not found. Please log in.");
          return;
        }

        // Call the backend to get the student classrooms
        const response = await axios.get('http://127.0.0.1:8000/student_classrooms', {
          params: { user_email: userEmail },
        });

       
        console.log("Fetched courses:", response.data.classes);

        // Set courses with data received from the API
        setCourses(response.data.classes);
      } catch (error) {
        // error message 
        setError("Error fetching courses. Please try again.");
        console.error("Error fetching courses:", error);
      }
    }

    // Call the fetch function
    fetchCourses();
  }, []);

  return (
    <div>
      <h1 id="dashboard-title">Dashboard</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
