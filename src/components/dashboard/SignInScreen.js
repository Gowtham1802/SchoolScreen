import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [instituteCode, setInstituteCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = text => {
    setPassword(text);
  };

  const handleLogin = async () => {
    if (!instituteCode || !username || !password) {
      Alert.alert('Incomplete fields', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('token', instituteCode);
    formData.append('uname', username);
    formData.append('upwd', password);
    formData.append('newversion', '1');

    try {
      const response = await fetch(
        'http://schoolapi.netcampus.in/api/app/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        },
      );

      const responseText = await response.text();

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError);
        Alert.alert(
          'Error',
          'Server returned invalid response. Please try again later.',
        );
        return;
      }

      if (result.user && navigation) {
        try {
          await AsyncStorage.setItem('userToken', JSON.stringify(result));
          setInstituteCode('');
          setUsername('');
          setPassword('');

          console.log(result);

          navigation.navigate('MainScreen', {
            user: result.user,
            tenant: result.tenant,
            menuarry: result.menuarry,
          });
        } catch (error) {
          console.error('Error storing user data:', error);
        }
      } else {
        Alert.alert(
          'Login failed',
          result.error || 'Invalid credentials. Please check and try again.',
        );
      }
    } catch (error) {
      console.error('Login Error:', error);
      Alert.alert('Error', 'Failed to login. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const clearAsyncStorageAndRefresh = async () => {
      try {
        await AsyncStorage.clear();
        // Force component re-render by changing state
        setInstituteCode('');
        setUsername('');
        setPassword('');
      } catch (error) {
        console.error('Error clearing async storage:', error);
      }
    };

    const unsubscribe = navigation.addListener(
      'focus',
      clearAsyncStorageAndRefresh,
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/SignIn/signin2.jpeg')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              source={require('../../../assets/SignIn/signin1.jpeg')}
              style={styles.logo1}
            />
          </View>

          <Text style={styles.signInText}>SIGN IN</Text>
          <Text style={styles.subText}>Get started to avail more features</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Icon name="school" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Institute Code"
                placeholderTextColor="#003366"
                value={instituteCode}
                onChangeText={setInstituteCode}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="account" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#003366"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003366"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text>
                  <Icon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={20}
                    color="#003366"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.loginButtonText}>LOGIN</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    // flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logoContainer1: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 60,
    top: 40,
  },
  logo1: {
    width: 360,
    height: 260,
    top: 90,
  },
  signInText: {
    fontSize: 30,
    color: '#003366',
    fontWeight: 'bold',
    top: 100,
  },
  subText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003366',
    top: 110,
  },
  inputContainer: {
    width: '80%',
    top: 130,
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
  input: {
    flex: 1,
    height: 45,
    color: '#003366',
  },
  loginButton: {
    backgroundColor: '#003366',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 140,
    marginBottom: 10,
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
