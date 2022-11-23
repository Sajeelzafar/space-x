import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// Action
const FETCH_MISSIONS = 'FETCH_MISSIONS';

// API
const API = 'https://api.spacexdata.com/v3/missions';

// Thunk
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  try {
    const data = await (fetch(API)).then((res) => res.json());
    // const data = await response.json();
    const missions = data.map((data) => ({
      id: data.mission_id,
      missionName: data.mission_name,
      dec: data.description,
    }));
    return missions;
  } catch (error) {
    return error.message;
  }

  // try {
  //   return await baseURL.fetchMissions();
  // } catch (error) {
  //   return error.message;
  // }
});

const initialState = [];

// Reducer Function
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS.fulfilled: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default missionReducer;
