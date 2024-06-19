import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, fetchProfile} from '../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [instituteCode, setInstituteCode] = useState('');
  const dispatch = useDispatch();
  const {loading, error, user, profile} = useSelector(state => state?.auth);

  useEffect(() => {
    const clearAsyncStorageAndRefresh = async () => {
      try {
        await AsyncStorage.clear();
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

  const handleLogin = () => {
    if (!instituteCode || !username || !password) {
      Alert.alert('Incomplete fields', 'Please fill in all fields.');
      return;
    }
    dispatch(loginUser({instituteCode, username, password}));
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Login failed', error);
    }
    if (user) {
      dispatch(fetchProfile());
    }
  }, [error, user, dispatch]);

  useEffect(() => {
    if (profile && user) {
      console.log('profile', profile);
      if (profile.user.id === user.id) {
        navigation.navigate('MainScreen');
      } else {
        Alert.alert(
          'User mismatch',
          'The user ID from profile does not match the logged in user.',
        );
      }
    }
  }, [profile, user, navigation]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
          <Text style={styles.signInText2}>
            Get started to avail more features
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Icon
                name="school"
                size={20}
                color="#003366"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Institute Code"
                value={instituteCode}
                onChangeText={setInstituteCode}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon
                name="account"
                size={20}
                color="#003366"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#003366" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={20}
                  color="#003366"
                />
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
    </KeyboardAvoidingView>
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
  },
  logoContainer1: {
    alignItems: 'center',
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
  signInText2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#003366',
    top: 110,
  },
  inputContainer: {
    width: '80%',
    top: 130,
    // flexDirection: 'row',
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
