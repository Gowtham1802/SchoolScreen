import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchAsyncStorageValues = async () => {
  try {
    const tid = await AsyncStorage.getItem('tid');
    const id = await AsyncStorage.getItem('id');
    return {tid, id};
  } catch (error) {
    console.error('Error fetching AsyncStorage values:', error);
    return {tid: null, id: null};
  }
};

export const fetchMenuarry = createAsyncThunk(
  'menuarry/fetchMenuarry',
  async () => {
    const {tid, id} = await fetchAsyncStorageValues();
    const response = await fetch(
      `http://Schoolapi.netcampus.in/api/app/getAppmenuDetails?tid=${tid}&User_id=${id}`,
      {
        method: 'POST',
      },
    );
    const result = await response.json();
    return result.menuarry;
  },
);

const menuarrySlice = createSlice({
  name: 'menuarry',
  initialState: {
    menuarry: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMenuarry.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMenuarry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.menuarry = action.payload;
      })
      .addCase(fetchMenuarry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default menuarrySlice.reducer;
