import { ThemeActionTypes, SET_THEME, ThemeStateType } from './types';

const initialState: ThemeStateType = {
  current: 0,
};

const themeReducer = (state = initialState, action: ThemeActionTypes) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, current: action.payload };
    default:
      return { ...state };
  }
};

export default themeReducer;
