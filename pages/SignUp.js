import React, { isValidElement, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Alert, ScrollView, Dimensions } from 'react-native';
import PasswordChecklist from 'react-password-checklist';

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student'); // Default to 'student'

    const handleSubmit = () => {
        if (firstname && lastname && username && email && password) {
            Alert.alert("Sign Up Successful!", `Welcome, ${firstname} ${lastname}`);
            // Here you can handle form submission, e.g., save the data or send it to a server
        } else {
            Alert.alert("Error", "Please fill in all the fields");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="First name"
                        value={firstname}
                        onChangeText={setFirstname}
                        placeholderTextColor="#AAB7C4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Last name"
                        value={lastname}
                        onChangeText={setLastname}
                        placeholderTextColor="#AAB7C4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#AAB7C4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#AAB7C4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#AAB7C4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password Again"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholderTextColor="#AAB7C4"
                    />
                    <PasswordChecklist
                        rules={["minLength", "number", "capital", "match"]}
                        minLength={8}
                        value={password}
                        valueAgain={confirmPassword}
                        onChange={(isValid) => {}}
                    />
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerLabel}>I am a:</Text>
                        <Picker
                            selectedValue={role}
                            style={styles.picker}
                            onValueChange={(itemValue) => setRole(itemValue)}
                        >
                            <Picker.Item label="Student" value="student" />
                            <Picker.Item label="Teacher" value="teacher" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#EAF6F6',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
    },
    formContainer: {
        width: '40%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#034f84',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#61C0BF',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    pickerContainer: {
        marginVertical: 15,
    },
    pickerLabel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#034f84',
        marginBottom: 5,
    },
    picker: {
        height: 50,
        color: '#034f84',
        borderWidth: 1,
        borderColor: '#61C0BF',
    },
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

export default SignUp;
