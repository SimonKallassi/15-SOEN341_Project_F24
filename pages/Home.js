import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/LoginPage');
    }
    return (
        <div className="split">
            <div className="left">
                <main style={{ padding: '20px' }}>
                    <section>
                        <h1 class="title">Welcome to <br></br><span id="name"> PeerEvaluator</span></h1>
                        <h3 class="slogan">To help evaluate your peers</h3>
                    </section>
                    <section class="buttons">
                        <button id="start" onClick={handleLoginClick}><span>Get Started</span></button>
                        <div id="login"><a href="">Already have an account?</a></div>
                    </section>
                </main>
            </div>
            <div className="right">
                <img className="home-image" src="https://images.vexels.com/media/users/3/139257/isolated/preview/b8fa8f291632f8fe68842e4fb100d8e0-square-rectangle-shape.png" alt="image placeholder"/>
            </div>
        </div>
        
    );
};

export default Home;
