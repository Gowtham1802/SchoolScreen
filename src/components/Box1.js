// Box1.js
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const Box1 = ({title, imageSource, navigation}) => {
  const onPressHandler = () => {
    switch (title) {
      case 'Message':
        navigation.navigate('About');
        break;
      case 'Attendance':
        navigation.navigate('Other');
        break;
      case 'Portfolio':
        navigation.navigate('About');
        break;
      case 'Homework':
        navigation.navigate('Other');
        break;
      case 'Fees Payment':
        navigation.navigate('About');
        break;
      case 'Notes':
        navigation.navigate('Other');
        break;
      case 'Diary / Events':
        navigation.navigate('About');
        break;
      case 'Time Table':
        navigation.navigate('Other');
        break;
      case 'Exam Marks':
        navigation.navigate('About');
        break;
      case 'Calendar Events':
        navigation.navigate('Other');
        break;
      case 'Meal Menu':
        navigation.navigate('About');
        break;
      case 'Documents':
        navigation.navigate('Other');
        break;
      case 'Chat':
        navigation.navigate('About');
        break;
      case 'Transport':
        navigation.navigate('Other');
        break;
      case 'Health Card':
        navigation.navigate('About');
        break;
      case 'My Learning':
        navigation.navigate('Other');
        break;
      case 'Syllabus':
        navigation.navigate('About');
        break;
      case 'Photo and Videos':
        navigation.navigate('Other');
        break;
      // Add cases for other screens similarly
      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 100,
    backgroundColor: 'white',
    margin: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#00004F',
    borderWidth: 3,
  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#00004F',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default Box1;
