import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async thunk for fetching profile
export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (_, {rejectWithValue}) => {
    try {
      const tid = await AsyncStorage.getItem('tid');
      const userid = await AsyncStorage.getItem('id');
      const roleid = await AsyncStorage.getItem('roll_id');

      const response = await fetch(
        'http://schoolapi.netcampus.in/api/app/dashboard',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({tid, userid, roleid}),
        },
      );

      const data = await response.json();

      if (data.user) {
        return data;
      } else {
        return rejectWithValue('Failed to fetch profile');
      }
    } catch (error) {
      return rejectWithValue('Failed to fetch profile');
    }
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    timetable: [],
    menuarry: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload.user;
        state.timetable = action.payload.ttarray;
        state.menuarry = action.payload.menuarry;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
