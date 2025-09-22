import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import User from '../Model/User';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');

    const handleRegister = () => {
        // Simple validation
        if (!username || !email || !password || !dob) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        let newUser = new User(username, dob, email, password);
        console.log("Registered User: ", newUser);
        // Alert.alert('Success', `Registered user: ${newUser.getGreeting()}`);
         addUser(newUser);
        // Registration logic here
        // Alert.alert('Success', 'Registered successfully!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth (YYYY-MM-DD)"
                value={dob}
                onChangeText={setDob}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );

    let GET_API = "http://192.168.1.13:3000/user";

    async function addUser(user: User) {
        try {
            console.log("user is " + JSON.stringify(user));
            const response = await fetch(GET_API, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    dob: user.dob,
                    email: user.email,
                    password: user.password,
                    username: user.username
                })
            });
            const json = await response.json();
            console.log("Post API call result is ", json);
            Alert.alert("Post API call result is " + JSON.stringify(json));
        } catch (error) {
            console.error(error);
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        fontSize: 16,
    },
});

export default Register;