// /* eslint-disable no-undef */
// import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
// import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
// import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {setupStore} from '@store/store';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('reactotron-react-native');
export const mockStore = setupStore();
// jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// jest.mock('react-native-device-info', () => mockRNDeviceInfo);
// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
// jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
// jest.mock('react-native-simple-toast', () => ({
//   show: jest.fn(),
//   hide: jest.fn(),
// }));
// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: str => str,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
//   initReactI18next: {
//     type: '3rdParty',
//     init: jest.fn(),
//   },
// }));

// // https://stackoverflow.com/questions/45020842/how-do-i-mock-react-i18next-and-i18n-js-in-jest

// jest.mock('@react-navigation/native', () => ({
//   ...jest.requireActual('@react-navigation/native'),
//   useNavigation: () => ({goBack: jest.fn()}),
//   useRoute: () => ({
//     params: {
//       //   <yourParamName>: '<paramValue>',
//       //   <yourParamName2>: '<paramValue2>',
//     },
//   }),
// }));

// const mockedFirebaseCrashlyticsLog = jest.fn();
// const mockedFirebaseCrashlyticsRecordError = jest.fn();
// jest.mock('@react-native-firebase/crashlytics', () => {
//   return () => ({
//     log: mockedFirebaseCrashlyticsLog,
//     recordError: mockedFirebaseCrashlyticsRecordError,
//   });
// });

// const mockedFirebaseAnalyticsLogEvent = jest.fn();
// const mockedFirebaseAnalyticsLogLogin = jest.fn();
// const mockedFirebaseAnalyticsSetUserId = jest.fn();
// jest.mock('@react-native-firebase/analytics', () => () => {
//   return {
//     logEvent: mockedFirebaseAnalyticsLogEvent,
//     logLogin: mockedFirebaseAnalyticsLogLogin,
//     setUserId: mockedFirebaseAnalyticsSetUserId,
//   };
// });
