import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './types';

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
