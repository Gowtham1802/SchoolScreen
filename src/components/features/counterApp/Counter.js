import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../../../../src/components/features/counterApp/counterSlice'; // Ensure the path is correct
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => dispatch(increment())}>
          +
        </Button>
        <Button
          mode="contained"
          onPress={() => dispatch(decrement())}
          style={styles.button}>
          -
        </Button>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        onChangeText={text => setIncrementAmount(text)}
        value={incrementAmount.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => dispatch(incrementByAmount(addValue))}
          style={styles.button}>
          Add Amount
        </Button>
        <Button mode="contained" onPress={resetAll} style={styles.button}>
          Reset All
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  count: {
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default Counter;
