// src/LoginScreen.js

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import backgroundImage from '../assets/pexels-irina.jpg';
import backgroundImage from '../../assets/pexels-irina-iriser.jpg';
// import backgroundImage from '../assets/pexels-irina-iriser-1.jpg';
// import backgroundImage from '../assets/pexels-photo-3.jpg';

const LoginScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (isLogin) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <Text style={styles.titles}>Click Here To Register..!</Text> */}
        <Text style={styles.title}>{isLogin ? 'LogIn' : 'Sign Up'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchButtonText}>
            {isLogin ? 'Create Account' : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  // titles: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   marginBottom: 10,
  // },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 50,
    // backgroundColor: '#004500',
    backgroundColor: '#D14FD1',
    // backgroundColor: '#567',
    // backgroundColor: '#F55',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  switchButton: {
    marginTop: 20,
  },
  switchButtonText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
