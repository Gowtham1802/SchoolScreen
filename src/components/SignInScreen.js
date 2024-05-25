import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#003366" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/SignIn/signin2.jpeg')}
              style={styles.logo}
            />
          </View>
          <View style={styles.logoContainer1}>
            <Image
              source={require('../../assets/SignIn/signin1.jpeg')}
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
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="account" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#003366"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Icon name="lock" size={20} color="#003366" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#003366"
                secureTextEntry
              />
              <Icon name="eye" size={20} color="#003366" />
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
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
    // iOS shadow
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // Android shadow
    elevation: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
