import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CalendarEvents = () => {
  const customAnimation = {
    0: {
      opacity: 0,
      scale: 0.5,
      rotate: '0deg',
    },
    0.5: {
      opacity: 1,
      scale: 1.2,
      rotate: '180deg',
    },
    1: {
      opacity: 1,
      scale: 1,
      rotate: '360deg',
    },
  };

  return (
    <Animatable.View
      style={styles.container}
      animation={customAnimation}
      duration={2000}
      iterationCount=""
      useNativeDriver>
      <View style={styles.calendarIconContainer}>
        <Icon name="calendar" size={40} color="#003366" />
        <Text style={styles.dateText}>28</Text>
      </View>
      <Text style={styles.labelText}>CALENDAR EVENTS</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#003366',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  calendarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 5,
  },
  labelText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default CalendarEvents;
