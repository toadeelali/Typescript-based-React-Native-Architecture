export const SET_THEME = 'SET_THEME';
export const RESET_THEME = 'RESET_THEME';
export const SUPPORTED_THEMES = {
  LIGHT: 0,
  DARK: 1,
};

interface Set {
  type: typeof SET_THEME;
  payload: number;
}

interface Reset {
  type: typeof RESET_THEME;
}

export interface ThemeStateType {
  current: number;
}

export type ThemeActionTypes = Set | Reset;
