import { createAction } from 'services/state/utils';
import { THEME, SUPPORTED_THEMES } from './Constants';

const Set = createAction(THEME.SET);
const SetDark = () => Set(SUPPORTED_THEMES.DARK);
const SetLight = () => Set(SUPPORTED_THEMES.LIGHT);

const ThemeActions = {
  Set,
  SetDark,
  SetLight
};

export default ThemeActions;