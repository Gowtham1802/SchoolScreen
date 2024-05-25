import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ScreenB({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Other Screen Here !</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Switch to Home</Text>
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
    backgroundColor: '#a5bf69',
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
  },
});

export default ScreenB;
