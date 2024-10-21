// pages/dashboard.js
import Navbar from './Navbar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

        <div className="course-overview">
          <h2 className="text-2xl font-semibold">Course overview</h2>
          <div className="filters flex space-x-4">
            <select className="border border-gray-300 p-2">
              <option value="all">All</option>
              <option value="completed">Completed</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-2"
            />
            <select className="border border-gray-300 p-2">
              <option>Sort by course name</option>
              <option>Sort by date</option>
            </select>
            <select className="border border-gray-300 p-2">
              <option>Card</option>
              <option>List</option>
            </select>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="course-card bg-white p-4 shadow rounded">
            <img
              src="/images/course-1.jpg"
              alt="Course 1"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="font-bold text-lg">COEN 317 F 2242 (Fall 2024)</h3>
            <p className="text-sm text-gray-600">Electrical & Computer Engineering</p>
          </div>

          <div className="course-card bg-white p-4 shadow rounded">
            <img
              src="/images/course-2.jpg"
              alt="Course 2"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="font-bold text-lg">COEN 320 S 2242 (Fall 2024)</h3>
            <p className="text-sm text-gray-600">Electrical & Computer Engineering</p>
          </div>

          <div className="course-card bg-white p-4 shadow rounded">
            <img
              src="/images/course-3.jpg"
              alt="Course 3"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="font-bold text-lg">ENGR 371 R 2242 (Fall 2024)</h3>
            <p className="text-sm text-gray-600">Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
