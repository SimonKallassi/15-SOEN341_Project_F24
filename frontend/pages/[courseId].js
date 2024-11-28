import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CoursePage() {
    const router = useRouter();
    const { courseId } = router.query; // Get courseId from the URL
    const [Component, setComponent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [groupMembers, setGroupMembers] = useState([]);
    const [error, setError] = useState(null);

    // Load the correct component based on the user's role
    useEffect(() => {
        const loadComponent = async () => {
            try {
                const role = localStorage.getItem("user_role");
                console.log("Retrieved role from localStorage:", role);

                if (!role) {
                    // Redirect to login page if role is not found
                    router.push('/login');
                    return;
                }

                if (role === "student") {
                    const StudentList = (await import('./StudentList')).default;
                    setComponent(() => StudentList);
                } else if (role === "teacher") {
                    const TeacherCourse = (await import('./TeacherCourse')).default;
                    setComponent(() => TeacherCourse);
                } else {
                    console.error("Invalid role detected");
                    router.push('/error'); // Redirect to an error page
                }
            } catch (err) {
                console.error("Error loading component:", err);
                setError("Error loading the component. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        loadComponent();
    }, [router]);

    // Fetch group members when the course ID changes
    useEffect(() => {
        async function fetchGroupMembers() {
            try {
                const userEmail = localStorage.getItem("user_email");
                if (!userEmail) {
                    setError("User email not found. Please log in.");
                    return;
                }

                if (!courseId) return;

                const response = await axios.get(`http://127.0.0.1:8000/classroom_members/${courseId}`, {
                    params: { user_email: userEmail },
                });

                console.log("Fetched group members:", response.data.members);
                setGroupMembers(response.data.members || []);
                setError(null); // Clear previous errors
            } catch (err) {
                console.error("Error fetching group members:", err);
                setError("Error fetching group members. Please try again.");
            }
        }

        if (courseId) {
            fetchGroupMembers();
        }
    }, [courseId]);

    // Display loading message while the component is being loaded
    if (loading) {
        return <div>Loading the course page...</div>;
    }

    // Display error message if an error has occurred
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Render the imported component with the required props
    return (
        <div>
            {Component ? (
                <Component students={groupMembers} courseID={courseId} />
            ) : (
                <div>Error loading component. Please refresh the page or try again later.</div>
            )}
        </div>
    );
}
