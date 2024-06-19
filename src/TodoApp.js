// src/TodoApp.js 

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {increment, decrement, toggleTodo} from './components/app/store';

const TodoApp = () => {
  const dispatch = useDispatch();
  const {count, todos} = useSelector(state => state);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      {todos.map(todo => (
        <View key={todo.id} style={styles.todoItem}>
          <Text
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}>
            {todo.text}
          </Text>
          <Button
            title="Toggle"
            onPress={() => dispatch(toggleTodo(todo.id))}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  counterText: {
    fontSize: 20,
    // marginBottom: 20,
  },
  todoItem: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
});

export default TodoApp;
