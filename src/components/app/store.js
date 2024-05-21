import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counterApp/counterSlice'; // Ensure the path is correct

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
