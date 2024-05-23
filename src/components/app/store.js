import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from '../features/counterApp/counterSlice'; // Ensure the path is correct
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
