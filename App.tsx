import ErrorBoundary from '@components/ErrorBoundry';
import Routes from '@navigation/routes';
import {store} from '@store/store';
import React from 'react';
import {NativeModules, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// Bridge Code
// const ToastService = NativeModules.ToastModule;

// <TouchableOpacity
// onPress={() => ToastService.showToast('BRIDGE SUCCESSFULL')}>
// <Text>Press me Button</Text>
// </TouchableOpacity>

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
