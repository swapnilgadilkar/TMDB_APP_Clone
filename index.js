import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  require('./ReactotronConfig');
}
async function enableMocking() {
  if (!__DEV__) {
    return;
  }
  try {
    require('./msw.polyfills');
    const {server} = require('./__mocks__/node');
    server.listen();
  } catch (e) {
    console.log('ERROR', e);
  }
}

enableMocking()
  .then(() => {
    AppRegistry.registerComponent(appName, () => App);
  })
  .catch(e => {
    console.log('ERROR', e);
  });
