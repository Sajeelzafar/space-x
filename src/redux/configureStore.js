import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
