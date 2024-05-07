import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  RefreshControl,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon1 from 'react-native-vector-icons/Entypo';
import BackgroundImg from '../../assets/background.png';
// import Box from '../src/Box';
import ScrollList from '../../src/components/ScrollList';
import ScrollList1 from '../../src/components/ScrollList1';
import {green} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from '../../src/components/ScreenA';
import ScreenB from '../../src/components/ScreenB';
// import Box1 from '../../src/components/Box1';
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.mainbody}>
      <ImageBackground source={BackgroundImg} style={styles.body}>
        <StatusBar backgroundColor="#00004F" />
        <View style={styles.container}>
          <View style={styles.container1}>
            <Image
              source={require('../../assets/navigation.png')}
              style={styles.image1}
            />
            <Text style={styles.text}>SMT SCHOOL</Text>
            <Image
              source={require('../../assets/notification.png')}
              style={styles.image1}
            />
          </View>
          <View style={styles.container2}>
            <View style={styles.imagecontent}>
              <Image
                source={require('../../assets/Gowtham.jpeg')}
                style={styles.image}
              />
            </View>
            <View style={styles.textcontent}>
              <Text style={styles.text1}>Welcome</Text>
              <Text style={styles.text2}>Gowtham T</Text>
              <Text style={styles.text3}>X - A</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <ScrollList />
      {/* <ScrollList1 /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={ScrollList1}
            options={{headerShown: false}}
          />
          <Stack.Screen name="About" component={ScreenA} />
          <Stack.Screen name="Other" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
  },
  body: {
    width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },
  image1: {
    width: 22,
    height: 22,
  },
  container1: {
    width: '100%',
    marginTop: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text3: {
    width: 70,
    color: 'black',
    backgroundColor: '#F6D00B',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 15,
    marginLeft: 10,
    marginTop: 10,
    padding: 3,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 20,
  },
  image: {
    width: 110,
    height: 120,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
  },
  textcontent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
    gap: 1,
  },
});
export default HomeScreen;
