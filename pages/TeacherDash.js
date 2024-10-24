import CourseList from './TeacherCourseList';

// Dummy data
const courses = [
  { id: 1, name: 'COEN 317 F 2242', description: 'Electrical & Computer Engineering' },
  { id: 2, name: 'COEN 320 S 2242', description: 'Electrical & Computer Engineering' },
  { id: 3, name: 'COEN 346 Y 2234', description: 'Electrical & Computer Engineering' },
  { id: 4, name: 'COEN 352 Y 2234', description: 'Electrical & Computer Engineering' },
  { id: 5, name: 'SOEN 341 Y 2234', description: 'Electrical & Computer Engineering' }
];

const App = () => {
  return (
    
    <div>
      <div> 
        <h1 id="dashboard-title">Welcome to the Instructor Dashboard</h1>
      <CourseList courses={courses} />
      </div> 
    </div>
  );
};

export default App;
