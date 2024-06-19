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
    }, 2000); // 2-second loading period
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
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
    fontWeight: 'bold',
    color: '#E43A45',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
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
    backgroundColor: '#2C5282',
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
