import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import BackgroundImg from '../../../assets/background.png';
import ScrollList from './ScrollList';
import ScrollList1 from './ScrollList1';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from '../dashboard/ScreenA';
import ScreenB from '../dashboard/ScreenB';
import CustomDrawerContent from './CustomDrawerContent';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerVisible(true);
  };

  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <View style={styles.mainbody}>
      <ImageBackground source={BackgroundImg} style={styles.body}>
        <StatusBar backgroundColor="#00004F" />
        <View style={styles.container}>
          <View style={styles.container1}>
            <TouchableOpacity onPress={handleDrawerOpen}>
              <Image
                source={require('../../../assets/navigation.png')}
                style={styles.image1}
              />
            </TouchableOpacity>

            <Text style={styles.text}>SMT SCHOOL</Text>

            <TouchableOpacity>
              <Image
                source={require('../../../assets/notification.png')}
                style={styles.image1}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <View style={styles.imagecontent}>
              <Image
                source={require('../../../assets/Gowtham.jpeg')}
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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={ScrollList1}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Drawer" component={CustomDrawerContent} />
          <Stack.Screen name="About" component={ScreenA} />
          <Stack.Screen name="Other" component={ScreenB} />
        </Stack.Navigator>
      </NavigationContainer>
      {drawerVisible && (
        <CustomDrawerContent
          onClose={handleDrawerClose}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
  },
  body: {
    width: '100%',
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
