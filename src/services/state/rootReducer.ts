import { combineReducers } from 'redux';
import { themeReducer } from 'themes';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;

// export const resetGlobal = createAction('global/reset');
// const rootReducer = (state: RootState, action: { type: string }): RootState => {
//   if (action.type === resetGlobal.toString()) {
//     return reducers(state, action);
//   }

//   return reducers(state, action);
// };