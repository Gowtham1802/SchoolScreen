import React from 'react';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NavigationTop from './src/components/PrincipalDashboard/NavigationTop';
import {SafeAreaProvider} from 'react-native-safe-area-context';


const App4 = () => {
  return (
    // <NavigationContainer>
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#30ba4c'} />
        <ImageBackground
          source={require('./assets/Dashboard/ImageBackground.jpeg')}
          style={styles.imgbackground}
          resizeMode="cover">
          {/* <DrawerNavigator /> */}
          <View style={styles.container1}>
            <FontAwesome5 name="bars" style={styles.bar} />
            <Text style={styles.text}>SMT SCHOOL</Text>
            <FontAwesome5 name="bell" style={styles.bell} />
          </View>
          <View style={styles.container2}>
            <Image
              source={require('./assets/Gowtham.jpeg')}
              style={styles.image}
              // resizeMode="contain"
            />
            <View style={styles.container3}>
              <Text style={styles.text2}>Welcome</Text>
              <Text style={styles.text3}>DR. Gowtham T</Text>
              <View>
                <Text style={styles.text4}> Academic & Principal </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.container4}>
          <NavigationTop />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 10,
    left: 5,
  },
  container3: {
    left: 30,
  },
  container4: {
    // top:18,
    marginLeft: 100,
    marginRight: 100,
  },
  imgbackground: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    position: 'absolute',
    borderRadius: 10,
    top: 30,
    left: 15,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    height: 110,
    width: 100,
  },
  text: {
    top: 10,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  text2: {
    top: 30,
    color: '#FFFFFF',
    fontSize: 15,
  },
  text3: {
    top: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
  text4: {
    top: 35,
    padding: 6,
    backgroundColor: '#F1C40F',
    borderRadius: 20,
    alignItems: 'center',
    color: '#050500',
    fontSize: 16.5,
    fontWeight: 'bold',
  },
  bar: {
    top: 10,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    left: 20,
  },
  bell: {
    top: 10,
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    right: 20,
  },
  tab1: {
    justifyContent: 'center',
  },
});

export default App4;
