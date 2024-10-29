import {PayloadAction, createSlice, createAction} from '@reduxjs/toolkit';
import {
  IAppState,
  RefreshActionStart,
  RefreshStopActionStart,
  StartAction,
  StopAction,
} from '@store/types/app.type';
import {equals} from 'ramda';

const initialState: IAppState = {
  loader: {
    actions: [],
    refreshing: [],
  },
  firstLaunch: null,
  days: 90,
};

export const logout = createAction('auth/logout');
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearAppData: () => {
      return initialState;
    },
    setFirstLaunch: (state, action: PayloadAction<boolean>) => {
      state.firstLaunch = action.payload;
    },
    startAction: (state, action: PayloadAction<StartAction>) => {
      state.loader = {
        ...state.loader,
        actions: [...state.loader.actions, action.payload.action],
      };
    },
    stopAction: (state, action: PayloadAction<StopAction>) => {
      const {payload} = action;
      state.loader = {
        ...state.loader,
        actions: state.loader.actions?.filter(actionData => {
          if (actionData.name !== payload.action.name) {
            return true;
          }
          if (
            payload.action.params &&
            !equals(actionData.params, payload.action.params)
          ) {
            return true;
          }
          return false;
        }),
      };
    },
    refreshActionStart: (state, action: PayloadAction<RefreshActionStart>) => {
      state.loader = {
        ...state.loader,
        refreshing: [...state.loader.refreshing, action.payload.refreshAction],
      };
    },
    refreshActionStop: (
      state,
      action: PayloadAction<RefreshStopActionStart>,
    ) => {
      state.loader = {
        ...state.loader,
        refreshing: state.loader.refreshing.filter(
          refresh => refresh !== action.payload.refreshAction,
        ),
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, () => initialState);
  },
});

export const {
  clearAppData,
  setFirstLaunch,
  startAction,
  stopAction,
  refreshActionStart,
  refreshActionStop,
} = appSlice.actions;
export default appSlice.reducer;
