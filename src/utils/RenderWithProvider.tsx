import React, {PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import type {AppStore, RootState} from '@store/store';
import ErrorBoundary from '@components/ErrorBoundry';
import {mockStore} from '../../jest.setup';
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}
export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store,
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <ErrorBoundary>
      <Provider store={mockStore}>{children}</Provider>
    </ErrorBoundary>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
  };
}
