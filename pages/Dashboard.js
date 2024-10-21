import CourseList from './CourseList';

// Dummy data
const courses = [
  { id: 1, name: 'COEN 317 F 2242', description: 'Electrical & Computer Engineering' },
  { id: 2, name: 'COEN 320 S 2242', description: 'Electrical & Computer Engineering' },
  { id: 3, name: 'COEN 346 Y 2234', description: 'Electrical & Computer Engineering' }
];

const App = () => {
  return (
    
    <div>
        
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
