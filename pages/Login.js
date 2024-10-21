import React, { useState } from 'react';
import Link from 'next/link';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameIsFilled, setUsernameIsFilled] = useState(true);
    const [passwordIsFilled, setPasswordIsFilled] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset the validation state before checking
        setUsernameIsFilled(true);
        setPasswordIsFilled(true);

        // Check that inputs are not blank
        if (!email && password) {
            setUsernameIsFilled(false);
            setPasswordIsFilled(true);
            alert('Please fill the username.');
            return;
        } else if (email && !password) {
            setUsernameIsFilled(true);
            setPasswordIsFilled(false);
            alert('Please enter your password.');
            return;
        } else if (!email && !password) {
            setUsernameIsFilled(false);
            setPasswordIsFilled(false);
            alert('Please fill in both fields.');
            return;
        }

        // If everything is filled, proceed with the submit logic
        alert('Submit clicked!');
    };

    return (
        <div className="container-out">
            <div className="top"></div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formBox">
                        <div className="header">
                            Sign In
                        </div>
                        <div className="inputs">
                            <div className="input" id="username">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={usernameIsFilled ? "" : "missing"}
                                />
                            </div>
                            <div className="input" id="password">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={passwordIsFilled ? "" : "missing"}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <Link href='/App'>
                            <button type="submit" id="submit">Login</button>
                            </Link>
                            <div className="link" id=""><a href="#">Forgot Password?</a></div>
                            <div className="link" id=""><a href="#">Forgot Username?</a></div>
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



const styles = StyleSheet.create({button: {
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