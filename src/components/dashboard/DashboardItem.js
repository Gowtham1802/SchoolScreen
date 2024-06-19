// DashboardItem.js

import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const DashboardItem = ({item, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 103,
    height: 89,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 5,
    borderColor: '#00004F',
    top: 7,
    left: -5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DashboardItem;
