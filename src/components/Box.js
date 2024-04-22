// Box.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Box = ({title, title1}) => {
  return (
    <View>
      {/* <View style={styles.text}>
          <Text>Today Class Period (10 Apr 2024)</Text>
          <Text>Time Table</Text>
        </View> */}

      <View style={styles.box}>
        <Text style={styles.title1}>{title1}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 160,
    backgroundColor: '#00004F',
    margin: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  title1: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    color: 'white',
    fontSize: 11,
    textTransform: 'uppercase',
  },
});

export default Box;
