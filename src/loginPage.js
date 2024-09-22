import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const loginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Username"
          value={username}
        />
        <TextInput
          placeholder="Password"
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    );
  };