// Box1.js

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Box1 = ({title, imageSource}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
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
    // marginBottom: 5,
  },
});

export default Box1;
