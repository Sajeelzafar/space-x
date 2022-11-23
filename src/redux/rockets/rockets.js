import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'FETCH',
  async () => {
    const data = await (fetch(url)).then((res) => res.json());
    const response = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images,
      description: rocket.description,
    }));
    return response;
  },
);

export const buttonToggle = (id) => ({ type: 'BUTTON_PRESSED', payload: id });

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH/fulfilled': {
      return action.payload;
    }

    case 'BUTTON_PRESSED': {
      return state;
    }

    default:
      return state;
  }
};

export default rocketsReducer;
