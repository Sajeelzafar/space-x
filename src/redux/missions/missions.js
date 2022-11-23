import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// Action
const FETCH_MISSIONS = 'FETCH_MISSIONS';

// API
const API = 'https://api.spacexdata.com/v3/missions';

// Thunk
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    const missions = data.map((data) => ({
      id: data.mission_id,
      missionName: data.mission_name,
      dec: data.description,
    }));
    return missions;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  missions: [],
};

// Reducer Function
const missionReducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        status: 'success',
      }));
  },
});

export default missionReducer.reducer;
