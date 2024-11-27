// pages/_app.js
import '../styles/globals.css'; // Import global CSS
import Link from 'next/link';
import '../styles/Home.css';
import '../styles/Login.css';

const Header = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>

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
