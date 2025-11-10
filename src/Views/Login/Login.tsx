import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import * as NetworkIndex from '../../../Network/NetworkIndex';
import User from '../Model/User';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    if (username === '' || password === '') {
      let user = new User('username', 'passwrd', 'test@t', '1234');
      setIsLoading(false);
      Alert.alert('Invalid Credentials', 'Please enter username and password');
      // navigation.navigate('Home' as never, {userData:{user}} );
    } else {
      getUserList(username, password);
    }
  };

  let GET_API = 'http://192.168.1.13:3000/user';
  function getUserList(username: string, password: string) {
    Keyboard.dismiss();
    fetch(GET_API + '?username=' + username + '&password=' + password)
      .then(response => response.json())
      .then(json => {
        console.log('Fetch API call result is ', json);
        let userList = JSON.stringify(json);
        setIsLoading(false);
        if (userList === '[]') {
          Alert.alert(
            'Invalid Credentials',
            'Please enter valid username and password',
          );
        } else {
          let user = (json as User[])[0];
          // console.log("User found '" +user.username+"'");
          navigation.navigate('HomeDrawer' as never);
          // navigation.navigate('Home' as never, { userData: { user } } as never);
        }
        // setResult(JSON.stringify(json))
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  }

  const handleRegister = () => {
    // Handle register navigation here
    Keyboard.dismiss();
    navigation.navigate('Register' as never);
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
      {isLoading && <ActivityIndicator></ActivityIndicator>}
      {!isLoading && <Button title="Login" onPress={handleLogin} />}
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
