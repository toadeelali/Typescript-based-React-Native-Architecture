import asyncStorage from '@react-native-community/async-storage';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { ENV } from '@env';

import rootReducer from './rootReducer';

/* ------------- Redux Configuration ------------- */
const middleware = [reduxThunk];

/* ------------- Redux Persist ------------------- */
const persistConfig = {
  key: 'root',
  storage: asyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ------------- Redux Development Tools ----------- */
let composeEnhancers = compose;

// Remote Redux Devtools
if (ENV !== 'production') {
  composeEnhancers = composeWithDevTools({
    name: 'RN Architecture',
  });
}

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

/* ------------- Clean all saved data ----------- */
export const purgeStore = () => persistor.purge();

export { store, persistor };
