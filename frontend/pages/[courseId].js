import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './StudentList';

const CourseStudentsPage = ({ userEmail }) => {
  const router = useRouter();
  const { courseId } = router.query; // Get the dynamic courseId from the URL

  const [groupMembers, setGroupMembers] = useState([]);
  const [error, setError] = useState(null);

  // GET request to fetch group members
  useEffect(() => {
    if (!userEmail) return; // Ensure userEmail is provided before fetching

    axios.get(`http://localhost:8000//classroom_members/${courseId}`, {
        params: { user_email: userEmail },
      })
      .then((response) => {
        setGroupMembers(response.data.group_members);
      })
      .catch((error) => {
        setError('Error fetching group members');
        console.error('Error fetching group members:', error);
      });
  }, [userEmail]);

  return (
    <div>
      {error && <p>{error}</p>}
      <StudentList students={groupMembers} courseId={courseId} />
    </div>
  );
};

export default CourseStudentsPage;
