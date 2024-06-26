import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { insuranceName, insuranceReducer } from './slices/insurances';
import { profileName, profileReducer } from './slices/profile';

import { Insurance } from '../../services/insurances';
import logger from 'redux-logger';

export type AppState = {
  profile: {
    name: string;
  };
  insurance: {
    insurances: Insurance[] | undefined;
  };
};

const rootReducer = combineReducers<AppState>({
  [profileName]: profileReducer,
  [insuranceName]: insuranceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
