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





import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
createDrawerNavigator,
DrawerContentScrollView,
DrawerItem,
} from '@react-navigation/drawer';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';

// Import your screens
import LoginScreen from './src/screens/auth/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardScreen = () => {
return (
<View style={styles.container}>
<WebView source={{uri: 'http://192.168.1.45:82/'}} />
</View>
);
};

const AnotherScreen = () => {
return (
<View style={styles.container}>
<Text>Another Screen</Text>
</View>
);
};

// Custom Drawer Content with Logout Confirmation Modal
const CustomDrawerContent = ({navigation}) => {
const [modalVisible, setModalVisible] = useState(false);

const handleLogout = () => {
setModalVisible(false);
navigation.replace('Login');
};

return (
<>
<DrawerContentScrollView>
<DrawerItem
label="Dashboard"
onPress={() => navigation.navigate('Dashboard')}
/>
<DrawerItem
label="Another"
onPress={() => navigation.navigate('Another')}
/>
<DrawerItem label="Logout" onPress={() => setModalVisible(true)} />
</DrawerContentScrollView>
<Modal
transparent={true}
visible={modalVisible}
onRequestClose={() => setModalVisible(false)}>
<View style={styles.modalOverlay}>
<View style={styles.modalContent}>
<Text style={styles.modalTitle}>Confirm Logout</Text>
<Text style={styles.modalMessage}>
Are you sure you want to logout?
</Text>
<View style={styles.modalButtons}>
<TouchableOpacity
style={styles.modalButton}
onPress={() => setModalVisible(false)}>
<Text style={styles.modalButtonText}>Cancel</Text>
</TouchableOpacity>
<TouchableOpacity
             style={styles.modalButton}
             onPress={handleLogout}>
<Text style={styles.modalButtonText}>Logout</Text>
</TouchableOpacity>
</View>
</View>
</View>
</Modal>
</>
);
};

const DrawerNavigator = () => {
return (
<Drawer.Navigator
initialRouteName="Dashboard"
drawerContent={props => <CustomDrawerContent {...props} />}>
<Drawer.Screen name="Dashboard" component={DashboardScreen} />
<Drawer.Screen name="Another" component={AnotherScreen} />
</Drawer.Navigator>
);
};

const App = () => {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen
name="Login"
component={LoginScreen}
options={{headerShown: false}}
/>
<Stack.Screen
name="Main"
component={DrawerNavigator}
options={{headerShown: false}}
/>
</Stack.Navigator>
</NavigationContainer>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
},
modalOverlay: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
width: 300,
padding: 20,
backgroundColor: 'white',
borderRadius: 10,
alignItems: 'center',
},
modalTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
modalMessage: {
fontSize: 16,
marginBottom: 20,
textAlign: 'center',
},
modalButtons: {
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
},
modalButton: {
flex: 1,
alignItems: 'center',
paddingVertical: 10,
},
modalButtonText: {
fontSize: 16,
color: '#007BFF',
},
});

export default App;

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
ActivityIndicator,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = ({navigation}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);

const handleLogin = () => {
setLoading(true);
setTimeout(() => {
setLoading(false);
navigation.navigate('Main');
}, 500); // 2-second loading period
};

return (
<SafeAreaView style={styles.safeArea}>
<StatusBar backgroundColor="#E43A45" barStyle="light-content" />
<ScrollView contentContainerStyle={styles.scrollViewContent}>
<View style={styles.card}>
<View style={styles.subContainer}>
<Image
source={require('../../assets/images/Logo.png')} // Replace with your logo's URL or local file
style={styles.logo}
/>
<Text style={styles.title}>SAARC CASES</Text>
</View>
<Text style={styles.subtitle}>ERP LOGIN</Text>
<View style={styles.inputContainer}>
<View style={styles.inputWrapper}>
<FontAwesomeIcon name="user" size={20} color="#E43A45" />
<TextInput
             style={styles.input}
             placeholder="Username"
             value={username}
             onChangeText={setUsername}
           />
</View>
<View style={styles.inputWrapper}>
<FontAwesomeIcon name="lock" size={20} color="#E43A45" />
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
color="#E43A45"
/>
</TouchableOpacity>
</View>
</View>
<TouchableOpacity style={styles.button} onPress={handleLogin}>
{loading ? (
<ActivityIndicator size="small" color="#fff" />
) : (
<Text style={styles.buttonText}>Sign In</Text>
)}
</TouchableOpacity>
<Text style={styles.line}></Text>
<Text style={styles.footer}>Powered by</Text>
<View>
<Image
source={require('../../assets/images/net_logo.jpeg')} // Replace with your powered by logo's URL or local file
style={styles.poweredByLogo}
/>
</View>
</View>
</ScrollView>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: '#fafafa',
},
scrollViewContent: {
flexGrow: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 26,
// backgroundColor: '#fff'
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
subContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#fafafa',
marginBottom: 16,
gap: 10,
},
logo: {
width: 58,
height: 55,
},
title: {
fontSize: 28,
fontFamily: 'Poppins-ExtraLight',
fontWeight: 'bold',
color: '#E43A45',
},
subtitle: {
fontSize: 22,
fontWeight: 'bold',
fontFamily: 'Poppins-Thin',
color: '#313131',
marginBottom: 30,
// top: -25,
},
inputContainer: {
width: '100%',
gap: 20,
marginBottom: 20,
},
input: {
flex: 1,
height: 45,
color: '#003366',
fontSize: 16,
paddingHorizontal: 8,
},
inputWrapper: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
// borderBottomWidth: 1,
borderColor: '#A8A8A8',
borderRadius: 5,
paddingHorizontal: 12,
gap: 5,
},
button: {
width: '100%',
height: 40,
backgroundColor: '#E43A45',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
marginBottom: 70,
top: 30,
},
buttonText: {
color: '#FFFFFF',
fontSize: 18,
},
line: {
width: '80%',
borderBottomWidth: 1,
borderColor: '#A8A8A8',
// marginBottom: 20,
bottom: 20,
},
footer: {
width: 120,
textAlign: 'center',
fontSize: 16,
color: '#A8A8A8',
backgroundColor: '#fafafa',
marginBottom: 8,
top: -35,
},
poweredByLogo: {
width: 152,
height: 30,
bottom: 20,
},
});

export default LoginScreen;



// src/screens/WelcomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  const images = [
    require('../../../assets/pexels-harry.jpg'),
    require('../../../assets/pexels-irina-iriser-1.jpg'),
    require('../../../assets/pexels-irina-iriser.jpg'),
  ];

  return (
    <View style={styles.container}>
      <Swiper autoplay={true} autoplayTimeout={3}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: height,
  },
  button: {
    position: 'absolute',
    bottom: height * 0.1,
    backgroundColor: '#E43A45',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;



import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import LoginScreen from './src/screens/auth/LoginScreen';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
  );
};

const Tab1Screen = () => (
  <View style={styles.container}>
    <WebView source={{uri: 'http://192.168.1.45:82/'}} />
  </View>
);

const Tab2Screen = () => (
  <View style={styles.container}>
    <WebView source={{uri: 'http://192.168.1.45:82/'}} />
  </View>
);

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Another Screen</Text>
    </View>
  );
};

const CustomDrawerContent = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleLogout = () => {
    setModalVisible(false);
    navigation.replace('Login');
  };

  return (
    <>
      <DrawerContentScrollView>
        <DrawerItem
          label="Dashboard"
          onPress={() => navigation.navigate('Dashboard')}
        />
        <DrawerItem
          label="Another"
          onPress={() => navigation.navigate('Another')}
        />
        <DrawerItem label="Logout" onPress={() => setModalVisible(true)} />
      </DrawerContentScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to logout?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Another" component={AnotherScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.8,
    padding: width * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  modalMessage: {
    fontSize: width * 0.04,
    marginBottom: height * 0.02,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: height * 0.01,
  },
  modalButtonText: {
    fontSize: width * 0.04,
    color: '#007BFF',
  },
});

export default App;


  const buttonColors = ['#5C4033', '#E43A45', '#28A745', '#6F42C1']; 





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
  ActivityIndicator,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://192.168.1.45:82/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login, e.g., store token, navigate to main screen, etc.
        navigation.navigate('Main');
      } else {
        // Handle error response, e.g., show error message
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              name="envelope"
              size={moderateScale(20)}
              color="#333"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon
              name="lock"
              size={moderateScale(20)}
              color="#333"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signUpContainer}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  logo: {
    width: horizontalScale(120),
    height: horizontalScale(120),
    marginBottom: verticalScale(10),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    padding: horizontalScale(20),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(10),
    shadowOffset: {width: 0, height: verticalScale(5)},
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: horizontalScale(10),
  },
  input: {
    flex: 1,
    height: verticalScale(40),
    fontSize: moderateScale(16),
    color: '#333',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  signUpText: {
    color: '#fff',
    fontSize: moderateScale(16),
  },
  signUpLink: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;




import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Text, Button, Alert} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    setShowConfirm(true);
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => setShowConfirm(false),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Avatar
            rounded
            size="xlarge"
            source={require('../../../assets/Gowtham.jpeg')}
            containerStyle={styles.avatar}
          />
          <Text style={styles.name}>Gowtham T</Text>
          <Text style={styles.username}>Mobile Application Developer</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Account</Text>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Account settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Privacy settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <Text style={styles.sectionTitle}>Security</Text>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Security settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Notification settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Data usage settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>

          <Text style={styles.sectionTitle}>Theme</Text>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Display settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Language settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>
        <View style={styles.bottomContainer}>
          <Button title="Logout" onPress={handleLogout} />
          <Text style={styles.versionText}>Version 1.0.1</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    width: horizontalScale(370),
    backgroundColor: '#f2f9ff',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  avatar: {
    marginBottom: verticalScale(10),
  },
  name: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
  },
  username: {
    fontSize: moderateScale(16),
    color: 'gray',
  },
  sectionTitle: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    marginLeft: horizontalScale(10),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  bottomContainer: {
    alignItems: 'center',
    paddingVertical: verticalScale(20),
  },
  versionText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(14),
    color: 'gray',
  },
});

export default AccountScreen;
