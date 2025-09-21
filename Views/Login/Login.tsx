import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Login: React.FC = () => {
     const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
       if(username === 'user' && password === 'pass') {
        Alert.alert('Login Successful', 'You have successfully logged in.',);
        navigation.navigate('Home' as never);
       } else {
        Alert.alert('Invalid Credentials');
       }
    };


    const handleRegister = () => {
        // Handle register navigation here
        navigation.navigate('Reigster' as never);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <TouchableOpacity onPress={handleRegister} style={styles.registerBtn}>
                <Text style={styles.registerText}>Register Now</Text>
            </TouchableOpacity>
        </View>
    );
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
        marginBottom: 32,
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
    registerBtn: {
        marginTop: 16,
        alignItems: 'center',
    },
    registerText: {
        color: '#007bff',
        fontSize: 16,
    },
});

export default Login;