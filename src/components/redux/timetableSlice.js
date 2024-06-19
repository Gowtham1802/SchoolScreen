import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchAsyncStorageValues = async () => {
  try {
    const tid = await AsyncStorage.getItem('tid');
    const id = await AsyncStorage.getItem('id');
    const rollId = await AsyncStorage.getItem('roll_id');
    return {tid, id, rollId};
  } catch (error) {
    console.error('Error fetching AsyncStorage values:', error);
    return {tid: null, id: null, rollId: null};
  }
};

export const fetchTimetable = createAsyncThunk(
  'timetable/fetchTimetable',
  async () => {
    const {tid, id, rollId} = await fetchAsyncStorageValues();
    const response = await fetch(
      `http://Schoolapi.netcampus.in/api/app/mytimetable?token=${tid}^${id}^${rollId}`,
    );
    const result = await response.json();
    return result.data;
  },
);

const timetableSlice = createSlice({
  name: 'timetable',
  initialState: {
    timetable: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTimetable.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTimetable.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.timetable = action.payload;
      })
      .addCase(fetchTimetable.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default timetableSlice.reducer;
