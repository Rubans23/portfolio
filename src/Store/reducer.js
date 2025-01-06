// reducers.js
import { TOGGLE_MODE } from './action';

const initialModeState = {
  mode: 'dark',
};

const modeReducer = (state = initialModeState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        mode: state.mode === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
};


export  {modeReducer};
