import React, { useState } from 'react';
import Link from 'next/link';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from 'axios';
import { useRouter } from 'next/router';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/login', new URLSearchParams({
                username: email,  // mapped to form_data.username in FastAPI login
                password: password  // mapped to form_data.password in FastAPI login
            }));

            // Save email and role to localStorage
            localStorage.setItem("user_email", email);  // Store the user's email locally
            
            const role = response.data.role;
            localStorage.setItem("user_role", role); // Save role
            // Redirect based on role
            if (role === "student") {
                router.push('/StudentDashboard');  // Replace with your student dashboard path
            } else if (role === "teacher") {
                router.push('/TeacherDash');  // Replace with your teacher dashboard path
            }
        } catch (err) {
            setError("Invalid email or password");
            console.error("Login error:", err);
        }
    };

    return (
        <div className="container-out">
            <div className="top"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formBox">
                        <div className="header">Sign In</div>
                        <div className="header">Sign In</div>
                        <div className="inputs">
                            <div className="input" id="username">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input" id="password">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="submit" id="submit">Login</button>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div className="link"><a href="#">Forgot Password?</a></div>
                            <div className="link"><a href="#">Forgot Username?</a></div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div className="link"><a href="#">Forgot Password?</a></div>
                            <div className="link"><a href="#">Forgot Username?</a></div>
                            <div>
                                <Link href='/SignUp'>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Sign Up</Text>
                                    </TouchableOpacity>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="bottom"></div>
        </div>
    );
};

const styles = StyleSheet.create({
    button: {
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#61C0BF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Login;


