import { store } from './configureStore';
import rootReducer  from './rootReducer';

interface ActionCreator {
  type: string;
  payload: any;
  error: any;
}

interface CreateAction {
  actionCreator: any;
}

export type ActionCreatorType = ActionCreator;
export type CreateActionType = CreateAction;
export type StoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
