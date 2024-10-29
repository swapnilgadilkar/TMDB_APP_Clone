import ErrorBoundary from '@components/ErrorBoundry';
import Routes from '@navigation/routes';
import {store} from '@store/store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
