import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/LoginPage');
    }
    return (
        <div>
            <main style={{ padding: '20px' }}>
                <section>
                    <h1>Welcome to PeerEvaluator.</h1>
                    <p>To help evaluate your peers.</p>
                </section>
                <section>
                    <h2>Teacher and Students</h2>
                    <button onClick={handleLoginClick}>Go To Login Page</button>
                </section>
            </main>
        </div>
    );
};

export default Home;
