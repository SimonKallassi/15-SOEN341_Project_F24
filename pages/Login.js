import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
   // function SubmitButton() {
        const handleSubmit = (event) => {
          
          alert('Submit clicked!');
        };
   // }
    return (
        <div class="container">
            <div class="header">
               Sign In
            </div>

            <div class="inputs">
                <div class="inputs">
                   
                    <div class="input" id="username" >
                        <img src ="../icons/username.png" />
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div class="input" id="password" >
                        <img src ="../icons/password.svg" />
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>

                <div class="buttons">
                    <div onClick={handleSubmit} class="button" id="submit">Log In</div>
                    {/* Used html link <a></a> for now just for test. Will change using native react routers when pages are created */}
                    <div class="link" id=""><a href ="#">Lost Password?</a> </div>
                    <div class="link" id=""><a href ="#">Lost username?</a> </div>
                    <div id="">Not registered yet? <span class="link"><a href ="#">Sign up</a></span> </div>
                </div>
            </div>

        </div>
    );
};

export default Login;