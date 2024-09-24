import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let usernameIsFilled=true;
    let passwordIsFilled=true;
    const handleSubmit = (event) => {
        event.preventDefault();

        //check that the input is not blank
        if (!email && password) {
            usernameIsFilled=false;
            passwordIsFilled=true;
            alert('Please fill the username.');
            return;
            
          }else if(email && !password){
            usernameIsFilled=true;
            passwordIsFilled=false;
            alert('Please enter your password.');
            return;
          }else if(!email && !password){
            usernameIsFilled=false;
            passwordIsFilled=false;
            alert('Please fill the fields.');
            return;
          }
          usernameIsFilled=false;
            passwordIsFilled=false;
          alert('Submit clicked!');
        };
        
    return (
    <div class="container-out">
        <div class="top"></div>
        <div class="container">
           
            <form onSubmit={handleSubmit}>
                <div class="formBox">
                    <div class="header">
                        Sign In
                    </div>
                    <div class="inputs">
                    
                        <div class="input" id="username" >
                            {/* <img src ="../icons/username.png" /> */}
                            <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} className={` ${usernameIsFilled ? "" : "missing"}`}/>
                        </div>
                        <div class="input" id="password" >
                            {/* <img src ="../icons/password.svg" /> */}
                            <input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={` ${passwordIsFilled ? "" : "missing"}`}/>
                        </div>
                    </div>

                    <div class="buttons">
                        <button type="submit" id="submit">Login</button>
                        {/* <div onClick={handleSubmit} class="button" id="submit">LogIn</div> */}
                        {/* Used html link <a></a> for now just for test. Will change using native react routers when pages are created */}
                        <div class="link" id=""><a href ="#">Lost Password?</a> </div>
                        <div class="link" id=""><a href ="#">Lost username?</a> </div>
                        <div id="">Not registered yet? <span class="link"><a href ="#">Sign up</a></span> </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="bottom"></div>
    </div>
    );
};

export default Login;