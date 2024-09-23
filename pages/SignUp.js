import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Home from "./Home";
const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
        <div className='wrapper' style={{padding: '10px'}}>
            
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder ="First name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder ="Last name" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder ="Username" required/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder ="Email" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder ="Password" required/>
                </div>
                <button type="submit">Sign up</button>
        
        </div>
    );
};

export default SignUp;