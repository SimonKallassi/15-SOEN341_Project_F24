import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import dynamic from 'next/dynamic';

const PasswordChecklist = dynamic(() => import('react-password-checklist'), { ssr: false });

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [errorMessage, setErrorMessage] = useState('Please fill in all the fields'); // Display error by default

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname && username && email && password && confirmPassword) {
            setErrorMessage(''); // Clear error message on success
            alert(`Sign Up Successful! Welcome, ${firstname} ${lastname}`);
        } else {
            setErrorMessage('Please fill in all the fields'); // Show error if fields are missing
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.title}>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <PasswordStrengthBar password={password} />
                    <input
                        style={styles.input}
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            setPasswordsMatch(e.target.value === password);
                        }}
                        required
                    />
                    <PasswordChecklist
                        rules={["minLength", "number", "capital", "match"]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        onChange={(isValid) => setPasswordsMatch(isValid)}
                    />
                    <div style={styles.pickerContainer}>
                        <label style={styles.pickerLabel}>I am a:</label>
                        <select
                            style={styles.picker}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </div>

                    {/* Always render error message for testing */}
                    <p data-testid="error-message" style={styles.error}>
                        {errorMessage}
                    </p>

                    <button type="submit" style={styles.button} data-testid="sign-up-button">
                        <span style={styles.buttonText}>Sign Up</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#EAF6F6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#034f84',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        border: '1px solid #61C0BF',
        fontSize: 16,
        color: '#333',
        boxSizing: 'border-box',
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
    },
    pickerContainer: {
        marginVertical: 15,
        width: '100%',
        marginBottom: 15,
    },
    pickerLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#034f84',
        marginBottom: 5,
    },
    picker: {
        width: '100%',
        padding: 10,
        borderRadius: 8,
        border: '1px solid #61C0BF',
        color: '#034f84',
    },
    button: {
        backgroundColor: '#61C0BF',
        paddingVertical: 15,
        borderRadius: 8,
        marginTop: 20,
        width: '100%',
        textAlign: 'center',
        cursor: 'pointer',
    },
    buttonText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
};

export default SignUp;