import { combineReducers } from 'redux';
import { createAction } from './utils';
import Theme from 'themes/Reducer';
export const resetGlobal = createAction('global/reset');
const reducers = combineReducers({
  Theme,
});

const rootReducer = (state = {}, action) => {
  if (action.type === resetGlobal.toString()) {
    // exclude account state from resetting for persisting authentication
    const { accounts: accountsState } = state;
    return reducers({ accounts: accountsState }, action);
  }

  return reducers(state, action);
};

export default rootReducer;
