import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './TeacherCourse';
import { useRouter } from 'next/router';


const CourseStudentsPage = () => {
  const router = useRouter();
  const { courseId } = router.query; // Get the dynamic courseId from the URL
  const [groupMembers, setGroupMembers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGroupMembers() {
      try {
        const userEmail = localStorage.getItem("user_email"); // Retrieve user email from localStorage
        if (!userEmail) {
          setError("User email not found. Please log in.");
          return;
        }

        if (!courseId) return; // Ensure courseId is available before making the request

        // Make the API call to get group members
        const response = await axios.get(`http://127.0.0.1:8000/classroom_members/${courseId}`, {
          params: { user_email: userEmail },
        });

        console.log("Fetched group members:", response.data.members); // Log data for debugging
        setGroupMembers(response.data.members || []); // Set groupMembers to the members array from the response
      } catch (error) {
        setError("Error fetching group members. Please try again.");
        console.error("Error fetching group members:", error);
      }
    }

    fetchGroupMembers();
  }, [courseId]);


  return (
    <div>
      <StudentList students={groupMembers} courseId={courseId} />
    </div>
  );
};

export default CourseStudentsPage