import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import timetableReducer from './timetableSlice';
import menuarryReducer from './menuarrySlice';

const store1 = configureStore({
  reducer: {
    auth: authReducer,
    // profile: profileReducer,
    timetable: timetableReducer,
    menuarry: menuarryReducer,
  },
});

export default store1;
