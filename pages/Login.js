import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Home from "./Home";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
  
    return (
        <div>
            <main style={{padding: '20px'}}>
                <section>
                    <h1>Welcome to PeerEvaluator.</h1>
                    <p>To help evaluate your peers.</p>
                </section>
                <section>
                    <h2>I hate this class</h2>
                </section>
            </main>
        </div>
    );
};

export default Login;