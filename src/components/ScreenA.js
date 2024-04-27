import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ScreenA({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <FontAwesome5 icon="arrow-left" />
        Go to About Screen
      </Text>

      <TouchableOpacity
        onPress={() => {
          // console.log('ABCDEFG');
          navigation.navigate('Box1');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C36E0D',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'DancingScript-SemiBold',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Teko-Bold',
  },
});

export default ScreenA;
