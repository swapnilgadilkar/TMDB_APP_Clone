import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from '@api/api';
import appSlice from './slices/app.slice';
import authSlice from '../features/authentication/slices/authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appSlice,
  auth: authSlice,
});

// Setup store function with optional preloadedState
export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(api.middleware),
    devTools: true,
    preloadedState,
  });

// Create the store using setupStore for default usage
export const store = setupStore();

// Setup listeners for RTK query cache
setupListeners(store.dispatch);

// Export types for use with hooks
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

// Custom hooks using typed dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
