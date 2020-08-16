import { combineReducers } from 'redux';
import { createAction } from './utils';
import { themeReducer } from 'themes';

// export const resetGlobal = createAction('global/reset');

const rootReducer = combineReducers({
  theme: themeReducer,
});

// const rootReducer = (state: RootState, action: { type: string }): RootState => {
//   if (action.type === resetGlobal.toString()) {
//     return reducers(state, action);
//   }

//   return reducers(state, action);
// };

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
