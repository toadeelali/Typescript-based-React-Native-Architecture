const LIGHT: number = 0;
const DARK: number = 1;
export const SET_THEME: string = 'SET_THEME';
export const RESET_THEME: string = 'RESET_THEME';

export const SUPPORTED_THEMES = {
  LIGHT,
  DARK,
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
