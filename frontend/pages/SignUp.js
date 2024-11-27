import React, { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useRouter } from 'next/router';  // Import useRouter

const PasswordChecklist = dynamic(() => import('react-password-checklist'), { ssr: false });

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student'); // Default to 'student'
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();  // Initialize router

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const userData = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            role: role,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/signup', userData); // FastAPI endpoint
            setSuccess(response.data.message);
            setError('');
            router.push('/Login');  // Redirect to login page on successful signup
        } catch (err) {
            setError(err.response ? err.response.data.detail : "An error occurred");
            setSuccess('');
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
                    {/* Password strength bar */}
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
                    {/* Password checklist */}
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

                    <button type="submit" style={styles.button}>
                        <span style={styles.buttonText}>Sign Up</span>
                    </button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
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
