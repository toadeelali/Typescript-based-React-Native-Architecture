import { createAction } from 'services/state/utils';
import { ThemeActionTypes, SET_THEME, SUPPORTED_THEMES } from './types';
import Colors from './colors';
import Metrics from './metrics';
import Images from './images';
import Typography from './typography';

const dark = { ...Colors.dark, Images, ...Metrics, ...Typography, key: SUPPORTED_THEMES.DARK };
const light = { ...Colors.light, Images, ...Metrics, ...Typography, key: SUPPORTED_THEMES.LIGHT };

const set = createAction(SET_THEME);
const setDark = (): ThemeActionTypes => set(SUPPORTED_THEMES.DARK);
const setLight = (): ThemeActionTypes => set(SUPPORTED_THEMES.LIGHT);
const get = (t = SUPPORTED_THEMES.LIGHT) => t === SUPPORTED_THEMES.LIGHT ? light : dark;

const themeActions = {
  set,
  setDark,
  setLight,
  get,
};

export default themeActions;
