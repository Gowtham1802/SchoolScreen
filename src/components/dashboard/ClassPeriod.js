import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ClassPeriod = ({periodName, time}) => {
  return (
    <View style={styles.periodContainer}>
      <Text style={styles.title1}>{periodName}</Text>
      <Text style={styles.title}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  periodContainer: {
    backgroundColor: '#00004F',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    marginRight: 5,
    width: 149,
    height: 58,
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5,
    top: -7,
    paddingHorizontal: 10,
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

export default ClassPeriod;
