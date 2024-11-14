import { useState, useEffect } from 'react';
import CourseList from './CourseList';
import axios from 'axios';

const App = ({ userEmail }) => {
  const [courses, setCourses] = useState([]);
  const [classCode, setClassCode] = useState(''); //store the class code
  const [message, setMessage] = useState(''); // 
  const [error, setError] = useState(null);

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

  const handleJoinClass = async () => {
    try {
      const userEmail = localStorage.getItem("user_email");
      if (!userEmail) {
        setError("User email not found. Please log in.");
        return;
      }

      const response = await axios.post('http://127.0.0.1:8000/join_class', {
        class_code: classCode,
        user_email: userEmail,
      });

      setMessage(response.data.message); // Display success message
      setError(null);
      setClassCode(''); // Clear the input field
      fetchCourses(); // Refresh the courses after joining
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data.detail : 'Error joining class');
      console.error("Error joining class:", error);
    }
  };

  return (
    <div>
      <h1 id="dashboard-title">Dashboard</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Join a Class</h2>
        <input
          type="text"
          placeholder="Enter class code"
          value={classCode}
          onChange={(e) => setClassCode(e.target.value)}
        />
        <button onClick={handleJoinClass}>Join Class</button>
      </div>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
