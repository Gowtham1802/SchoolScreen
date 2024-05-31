import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatImage from '../../../assets/Box-Images/live-chat.png';
import HomeWork from '../../../assets/Box-Images/homework.png';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={HomeWork} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>HOMEWORK</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CHAT</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CALENDAR</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CHAT</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CHAT</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CHAT</Text>
      </View>
      <View style={styles.container1}>
        <Image source={ChatImage} style={styles.image} resizeMode="contain" />
        <Text style={styles.text1}>CHAT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f2e6',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  container1: {
    margin: 10,
    height: '13%', // Adjust height to fit within the grid
    width: '28%', // Adjust width to fit within the grid
    borderWidth: 3,
    borderColor: '#35b81f',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
  },
  text1: {
    marginBottom: -10,
    width: '100%',
    color: '#050505',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    borderBottomLeftRadius: 5,
    fontSize: 13,
  },
  image: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    height: 46,
    width: 50,
  },
});

export default MenuScreen;
