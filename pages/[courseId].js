import { useRouter } from 'next/router';
import StudentList from './StudentList';

// Dummy data
const students = [
  { id: 1, courseId: 1, name: 'Fahad Abdul Rahman', ratings: [{ subject: 'Teamwork', score: 8 }] },
  { id: 2, courseId: 1, name: 'Oyeyimika Adeoye', ratings: [{ subject: 'Teamwork', score: 7 }] },
  { id: 3, courseId: 2, name: 'John Doe', ratings: [{ subject: 'Communication', score: 9 }] },
  // More students...
];

const CourseStudentsPage = () => {
  const router = useRouter();
  const { courseId } = router.query; // Get the dynamic courseId from the URL

  return (
    <div>
      <StudentList students={students} courseId={courseId} />
    </div>
  );
};

export default CourseStudentsPage;
