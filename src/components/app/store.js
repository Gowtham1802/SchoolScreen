// src/components/app/store.js
import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});




// src/store.js

// import { configureStore, createSlice } from '@reduxjs/toolkit';
// 
// const initialState = {
//     count: 0,
//     todos: [
//         { id: 1, text: "Learn React Native", completed: false },
//         { id: 2, text: "Learn Immer", completed: false }
//     ]
// };
// 
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.count += 5;
//     },
//     decrement(state) {
//       state.count -= 5;
//     },
//     toggleTodo(state, action) {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//   },
// });
// 
// const store = configureStore({
//     reducer: counterSlice.reducer
// });
// 
// export const {increment, decrement, toggleTodo} = counterSlice.actions;
// export default store;

