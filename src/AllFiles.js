import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'http://192.168.1.45:82/'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'yourUsername' && password === 'yourPassword') {
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.subContainer}>
            <Image
              source={require('./src/assets/images/ERP_LOGO.jpeg')}
              style={styles.logo}
            />
            <Text style={styles.title}>SAARC CASES</Text>
          </View>
          <Text style={styles.subtitle}>ERP</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon name="user" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#003366"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.line}></Text>
          <Text style={styles.footer}>Powered by</Text>
          <View>
            <Image
              source={require('./src/assets/images/netkampus_logo.jpeg')}
              style={styles.poweredByLogo}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    padding: 16,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    top: -50,
    gap: 10,
  },
  logo: {
    width: 86,
    height: 80,
    fontSize: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E43A45',
    top: -10,
  },
  subtitle: {
    fontSize: 40,
    top: -80,
    color: '#313131',
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    width: '80%',
    height: 45,
    color: '#003366',
    fontSize: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    gap: 5,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#2C5282',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
    top: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  line: {
    width: '80%',
    top: 50,
    borderBottomWidth: 1,
    borderColor: '#A8A8A8',
  },
  footer: {
    width: 120,
    textAlign: 'center',
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 8,
    position: 'absolute',
    backgroundColor: '#fafafa',
    top: 598,
  },
  poweredByLogo: {
    top: 100,
    width: 255,
    height: 50,
  },
});

export default LoginScreen;




import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StatusBar backgroundColor="#003366" barStyle="light-content" />

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image
              source={require('../../assets/images/ERP_LOGO.jpeg')} // Replace with your logo's URL or local file
              style={styles.logo}
            />
            <Text style={styles.title}>SAARC CASES</Text>
          </View>
          <Text style={styles.subtitle}>ERP</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon name="user" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#003366"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.line}></Text>
          <Text style={styles.footer}>Powered by</Text>
          <View>
            <Image
              source={require('../../assets/images/netkampus_logo.jpeg')} // Replace with your powered by logo's URL or local file
              style={styles.poweredByLogo}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    // top: 200,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    top: -50,
    gap: 10,
  },
  logo: {
    width: 86,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E43A45',
    top: -10,
  },
  subtitle: {
    fontSize: 40,
    top: -80,
    color: '#313131',
  },
  inputContainer: {
    width: '80%',
    gap: 10,
  },
  input: {
    width: '80%',
    height: 45,
    color: '#003366',
    fontSize: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    gap: 5,
  },
  button: {
    backgroundColor: '#003366',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  line: {
    width: '80%',
    top: 50,
    borderBottomWidth: 1,
    borderColor: '#A8A8A8',
  },
  footer: {
    width: 120,
    textAlign: 'center',
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 8,
    position: 'absolute',
    backgroundColor: '#fafafa',
    top: 598,
  },
  poweredByLogo: {
    top: 100,
    width: 255,
    height: 50,
  },
});

export default LoginScreen;




import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const DashboardScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={{uri: 'https://path-to-profile-image.png'}} // replace with the correct image URL or import locally
        />
        <Text style={styles.profileName}>Murugesan - Founder and Chairman</Text>
        <Text style={styles.profileDescription}>
          Sri P. Murugesan is an Engineer, Entrepreneur, Investor,
          Philanthropist, and Visionary Leader. Not everyone gets the chance to
          be personally molded, influenced, and mentored by Dr. A.P.J. Abdul
          Kalam; but, Sri P. Murugesan is one of those rare few to have had that
          opportunity. He is a pioneer and the Industry leader in the field of
          manufacturing polymer-based military grade rotomolded cases catering
          to the Indian Defense Sector.
        </Text>
        <Text style={styles.profileDescription}>
          Murugesan is the MD of SAARC Cases and SAARC Masts Tech. He has more
          than two decades of business experience and has invested over USD 2
          Million into multiple business ventures. He has spearheaded several
          philanthropic activities to improve the situation of the poor and the
          needy. His rich experience and business acumen inspires all of us at
          SAARC Masts Tech and drives us towards our goals.
        </Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.subContainer}>
          <Image
            source={require('../../assets/images/ERP_LOGO.jpeg')} // Replace with your logo's URL or local file
            style={styles.logo}
          />
          <Text style={styles.title}>SAARC CASES</Text>
        </View>
        <Text style={styles.subtitle}>ERP</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon name="user" size={20} color="#003366" />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesomeIcon name="lock" size={20} color="#003366" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color="#003366"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerLine}>
          <Text style={styles.line}></Text>
          <Text style={styles.footer}>Powered by</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/netkampus_logo.jpeg')} // Replace with your powered by logo's URL or local file
            style={styles.poweredByLogo}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  profileSection: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    bottom: 35,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  profileDescription: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  
  loginContainer: {
    // bottom: 10,
    padding: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    bottom: 10,
    gap: 10,
  },
  logo: {
    width: 86,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E43A45',
    top: -10,
  },
  subtitle: {
    fontSize: 40,
    top: -50,
    color: '#313131',
    textAlign: 'center',
  },
  inputContainer: {
    gap: 10,
  },
  input: {
    width: '80%',
    height: 45,
    color: '#003366',
    fontSize: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    gap: 5,
  },
  loginButton: {
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#2C5282',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
    top: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerLine: {
    // top: 80,
    marginBottom: 50,
  },
  line: {
    width: '80%',
    top: 50,
    left: 36,
    borderBottomWidth: 1,
    borderColor: '#A8A8A8',
    alignItems: 'center',
    textAlign: 'center',
    // bottom: 80,
  },
  footer: {
    width: 120,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 8,
    position: 'absolute',
    backgroundColor: '#fafafa',
    top: 57,
    left: 120,
  },
  poweredByLogo: {
    marginTop: 100,
    marginBottom: 80,
    width: 255,
    height: 50,
  },
});

export default DashboardScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://path-to-your-logo.png' }} // Replace with your logo's URL or local file
        style={styles.logo}
      />
      <Text style={styles.title}>SAARC CASES</Text>
      <Text style={styles.subtitle}>ERP</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor="#A8A8A8"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A8A8A8"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Powered by</Text>
      <Image
        source={{ uri: 'https://path-to-powered-by-logo.png' }} // Replace with your powered by logo's URL or local file
        style={styles.poweredByLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E43A45',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#A8A8A8',
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#2C5282',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footer: {
    fontSize: 16,
    color: '#A8A8A8',
    marginBottom: 8,
  },
  poweredByLogo: {
    width: 100,
    height: 50,
  },
});

export default LoginScreen;



// Login Full Screen Here...!

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/net_logo.jpeg')} // Replace with your logo's URL or local file
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>BEM-VINDO!</Text>
          <View style={styles.card}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Registrar-se</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>ou</Text>
            <View style={styles.socialIcons}>
              <FontAwesomeIcon name="facebook" size={24} color="#3b5998" />
              <FontAwesomeIcon name="google" size={24} color="#db4437" />
              <FontAwesomeIcon name="apple" size={24} color="#000000" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  card: {
    width: '90%',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    height: 45,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  orText: {
    marginVertical: 10,
    color: '#888888',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
});

export default LoginScreen;
