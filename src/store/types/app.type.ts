type IParams = {
  id: string;
};

type IAction = {
  name: string;
  params?: IParams;
};

type IPayload = {
  action: IAction;
};

type LoaderType = {
  actions: IAction[];
  refreshing: unknown[];
};
interface IAppState {
  loader: LoaderType;
  firstLaunch: boolean | null;
  days: number;
}

interface SetFirstLaunch {
  payload: boolean;
}

export interface StartAction {
  action: IAction;
}
export interface StopAction {
  action: IAction;
}

export interface RefreshActionStart {
  refreshAction: string;
}
export interface RefreshStopActionStart {
  refreshAction: string;
}

type AppActions = SetFirstLaunch;

export type {AppActions, LoaderType, IAppState, IPayload, IAction};
