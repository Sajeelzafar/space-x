import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  id: ' ',
  name: ' ',
  type: ' ',
  flickr_images: ' ',
  description: ' ',
  reserved: false,
};

export const fetchRockets = createAsyncThunk(
  'FETCH',
  async () => {
    const data = await (fetch(url)).then((res) => res.json());
    const response = data.map((rocket) => ({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      flickr_images: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    }));
    return response;
  },
);

export const buttonToggle = (id) => ({ type: 'BUTTON_PRESSED', payload: id });

const rocketsReducer = (state = [initialState], action) => {
  switch (action.type) {
    case 'FETCH/fulfilled': {
      return action.payload;
    }

    case 'BUTTON_PRESSED': {
      const newState = state.map((rockets) => {
        if (rockets.id === action.payload) {
          return { ...rockets, reserved: !rockets.reserved };
        }
        return rockets;
      });
      return newState;
    }

    default:
      return state;
  }
};

export default rocketsReducer;
