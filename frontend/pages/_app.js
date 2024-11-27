// pages/_app.js
import '../styles/globals.css'; // Import global CSS
import Link from 'next/link';
import '../styles/Home.css';
import '../styles/Login.css';
import '../styles/teacherDashboard.css';
import '../styles/teachercourse.css';

const Header = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
                    <li>
                        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/Login" style={{ color: '#fff', textDecoration: 'none' }}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="/SignUp" style={{ color: '#fff', textDecoration: 'none' }}>
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link href="/Dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/TeacherDash" style={{ color: '#fff', textDecoration: 'none' }}>
                            Teacher Dashboard
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// This is the main layout wrapper
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header /> {/* This header will be displayed on every page */}
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;
