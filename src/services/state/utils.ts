import {  ActionCreatorType } from './types';

export const createAction = (type: string) => {
  const actionCreator = (payload: any): ActionCreatorType => ({
    type,
    payload,
    error: payload instanceof Error,
  });

  actionCreator.toString = () => type;

  return actionCreator;
};
