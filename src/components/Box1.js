import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Box1 = ({title, imageSource, navigation}) => {
  console.log('Props received by Box1:', title, imageSource, navigation); // Log props to check if navigation prop is passed correctly
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ScreenA')} // Ensure navigation prop is used here
      style={styles.container}>
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
    borderLeftColor: 'green',
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
