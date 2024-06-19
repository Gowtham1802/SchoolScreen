import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Utility function to fetch values from AsyncStorage
const fetchAsyncStorageValues = async keys => {
  try {
    const values = await Promise.all(
      keys.map(key => AsyncStorage.getItem(key)),
    );
    return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  } catch (error) {
    console.error('Error fetching AsyncStorage values:', error);
    return Object.fromEntries(keys.map(key => [key, null]));
  }
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({instituteCode, username, password}, {rejectWithValue}) => {
    const formData = new FormData();
    formData.append('token', instituteCode);
    formData.append('uname', username);
    formData.append('upwd', password);
    formData.append('newversion', '1');

    try {
      const response = await fetch(
        'https://schoolapi.netcampus.in/api/app/login',
        {
          method: 'POST',
          headers: {'Content-Type': 'multipart/form-data'},
          body: formData,
        },
      );

      const data = await response.json();

      if (data.user) {
        await AsyncStorage.multiSet([
          ['tid', data.tenant.tid.toString()],
          ['id', data.user.id.toString()],
          ['roll_id', data.user.role_id.toString()],
          ['userToken', data.user.id.toString()],
        ]);
        return data;
      } else {
        return rejectWithValue(data.error || 'Invalid credentials');
      }
    } catch (error) {
      return rejectWithValue('Failed to login. Please try again later.');
    }
  },
);

// Async thunk for fetching profile
export const fetchProfile = createAsyncThunk(
  'auth/fetchProfile',
  async (_, {rejectWithValue}) => {
    try {
      const {tid, id, roll_id} = await fetchAsyncStorageValues([
        'tid',
        'id',
        'roll_id',
      ]);

      const response = await fetch(
        `https://schoolapi.netcampus.in/api/app/profile?token=${tid}^${id}^${roll_id}`,
      );
      const data = await response.json();

      if (data) {
        return data;
      } else {
        return rejectWithValue('Failed to fetch profile data');
      }
    } catch (error) {
      return rejectWithValue('Failed to fetch profile data');
    }
  },
);

// Async thunk for fetching timetable
export const fetchTimetable = createAsyncThunk(
  'timetable/fetchTimetable',
  async () => {
    const {tid, id, roll_id} = await fetchAsyncStorageValues([
      'tid',
      'id',
      'roll_id',
    ]);
    const response = await fetch(
      `https://Schoolapi.netcampus.in/api/app/mytimetable?token=${tid}^${id}^${roll_id}`,
    );
    const result = await response.json();
    return result.data;
  },
);

// Async thunk for fetching menu array
export const fetchMenuarry = createAsyncThunk(
  'menuarry/fetchMenuarry',
  async () => {
    const {tid, id} = await fetchAsyncStorageValues(['tid', 'id']);
    const response = await fetch(
      `https://Schoolapi.netcampus.in/api/app/getAppmenuDetails?tid=${tid}&User_id=${id}`,
      {
        method: 'POST',
      },
    );
    const result = await response.json();
    return result.menuarry;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    tenant: null,
    menuarry: [],
    isLoggedIn: false,
    loading: false,
    error: null,
    profile: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
      state.tenant = null;
      state.menuarry = [];
      state.isLoggedIn = false;
      state.profile = null;
      AsyncStorage.clear();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.tenant = action.payload.tenant;
        state.menuarry = action.payload.menuarry;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTimetable.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTimetable.fulfilled, (state, action) => {
        state.timetable = action.payload;
        state.loading = false;
      })
      .addCase(fetchTimetable.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchMenuarry.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuarry.fulfilled, (state, action) => {
        state.menuarry = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenuarry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
