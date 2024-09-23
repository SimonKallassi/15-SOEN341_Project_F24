import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    return (
        <div class="container">
            <div class="header">
                {/* empty for now but will be used late */}
            </div>

            <div class="inputs">
                <div class="inputs">
                    <div class="input">
                        <img src ="." />
                        <input type="text"/>
                    </div>
                    <div class="input" id="username">
                        <img src ="." />
                        <input type="text"/>
                    </div>
                    <div class="input" id="password">
                        <img src ="." />
                        <input type="password"/>
                    </div>
                </div>

                <div class="buttons">
                    <div class="button" id="submit"></div>
                    <div class="link" id="">Lost Password? </div>
                    <div class="link" id="">Lost username? </div>
                    <div id="">Not registered yet? <span class="link">Sign up</span> </div>
                </div>
            </div>

        </div>
    );
};

export default Login;