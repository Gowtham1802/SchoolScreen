// ScrollList.js

import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Box from '../../src/components/Box';

const data = [
  {id: '1', title: '9:20Am to 10:00Am', title1: 'English-th'},
  {id: '2', title: '10:00Am to 10:40Am', title1: 'Language-th'},
  {id: '3', title: '10:50Am to 11:30Am', title1: 'Hindi-th'},
  {id: '4', title: '11:30Am to 12:10Pm', title1: 'Mathematics-th'},
  {id: '5', title: '12:40Pm to 1:20Pm', title1: 'Chemistry-th'},
  {id: '6', title: '1:20Pm to 2:00Pm', title1: 'Physics-th'},
  {id: '7', title: '2:10Pm to 2:50Pm', title1: 'Biology-th'},
  {id: '8', title: '2:50Pm to 3:30Pm', title1: 'Social Science-th'},
];

const ScrollList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalbox}>
        <View style={styles.textbox1}>
          <Text style={styles.text1}>Today Class Period</Text>
          <Text style={styles.text2}>(12 Apr 2024)</Text>
        </View>
        <View style={styles.textbox2}>
          <Text style={styles.text1}>Time Table</Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Box title={item.title} title1={item.title1} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDEDEF',
  },
  totalbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox1: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  textbox2: {
    marginRight: 10,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    color: 'gray',
  },
});

export default ScrollList;
