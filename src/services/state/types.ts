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
