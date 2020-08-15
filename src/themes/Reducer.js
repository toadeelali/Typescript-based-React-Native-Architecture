import { SUPPORTED_THEMES, THEME } from './Constants';

const INIT_STATE = {
  theme: SUPPORTED_THEMES.LIGHT
};

export default function Theme(state = INIT_STATE, action) {
  const nState = { ...state };
  switch (action.type) {
    case THEME.SET:
      nState.theme = action.payload;
      return nState;
    default:
      return nState;
  }
};