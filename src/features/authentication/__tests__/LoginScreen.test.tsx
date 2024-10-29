import React from 'react';
import {fireEvent, waitFor} from '@testing-library/react-native';
import {useUserLoginMutation} from '../services/authService';
import {loginSuccess} from '../slices/authSlice';
import {useAppDispatch} from '@store/store';
import LoginScreen from '../screens/LoginScreen';
import {renderWithProviders} from '@utils/RenderWithProvider';
import {server} from '../../../../__mocks__/node';
import {handlers} from '__mocks__/handlers';

const initialAuthState = {
  token: null,
  user: null,
  isAuthenticated: false,
};

jest.mock('../services/authService', () => ({
  useUserLoginMutation: jest.fn(),
}));

jest.mock('@store/store', () => ({
  useAppDispatch: jest.fn(),
}));

describe('LoginScreen Component', () => {
  const mockDispatch = jest.fn();
  const mockLogin = jest.fn();
  // Enable API mocking before tests
  beforeAll(() => server.listen());

  // Reset request handlers between tests
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests
  afterAll(() => server.close());

  beforeEach(() => {
    jest.clearAllMocks();
    useUserLoginMutation.mockReturnValue([mockLogin]);
    useAppDispatch.mockReturnValue(mockDispatch);
  });

  it('renders username and password inputs and login button', () => {
    const {getByPlaceholderText, getByTestId} = renderWithProviders(
      <LoginScreen />,
      {preloadedState: {auth: initialAuthState}},
    );

    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByTestId('login-btn')).toBeTruthy();
  });

  it('dispatches loginSuccess on successful login', async () => {
    const {getByPlaceholderText, getByTestId} = renderWithProviders(
      <LoginScreen />,
      {preloadedState: {auth: initialAuthState}},
    );
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByTestId('login-btn');

    fireEvent.changeText(usernameInput, 'eve.holt@reqres.in');
    fireEvent.changeText(passwordInput, 'cityslicka');

    mockLogin.mockResolvedValue({
      data: {token: 'mock-token', user: {name: 'Eve Holt'}},
    });

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        loginSuccess({token: 'mock-token', user: {name: 'Eve Holt'}}),
      );
    });
  });

  it('logs error on failed login', async () => {
    const {getByTestId} = renderWithProviders(<LoginScreen />, {
      preloadedState: {auth: initialAuthState},
    });
    const loginButton = getByTestId('login-btn');

    mockLogin.mockResolvedValue({error: 'Login failed'});

    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(mockDispatch).not.toHaveBeenCalled(); // Ensure dispatch is not called on failure
    });
  });
});

// import React from 'react';
// import {renderWithProviders} from '@utils/RenderWithProvider';
// import LoginScreen from '../screens/LoginScreen';
// import {fireEvent, render, waitFor} from '@testing-library/react-native';
// import {setupServer} from 'msw/node';
// import {handlers} from '../../../../__mocks__/handlers';
// import {loginSuccess} from '../slices/authSlice';
// import {useUserLoginMutation} from '../services/authService';
// import {NavigationContainer} from '@react-navigation/native';
// import Routes from '@navigation/routes';
// import App from '../../../../App';

// // Initial auth state for preloaded state
// const initialAuthState = {
//   token: null,
//   user: null,
//   isAuthenticated: false,
// };

// // Mock navigation and route
// const navigation: any = {
//   navigate: jest.fn(),
// };
// const route: any = jest.fn();

// // Mock server setup
// const server = setupServer(...handlers);

// // Mocking the authService with jest
// jest.mock('../services/authService', () => ({
//   useUserLoginMutation: jest.fn(),
// }));

// describe('Check if login screen gets rendered correctly or not', () => {
//   const dispatchMock = jest.fn();

//   // Enable API mocking before tests
//   beforeAll(() => server.listen());

//   // Reset request handlers between tests
//   afterEach(() => server.resetHandlers());

//   // Disable API mocking after the tests
//   afterAll(() => server.close());

//   beforeEach(() => {
//     // Clear mocks before each test
//     jest.clearAllMocks();
//   });

//   it('Should render successfully', async () => {
//     const {getByTestId} = renderWithProviders(<LoginScreen />, {
//       preloadedState: {
//         auth: initialAuthState,
//       },
//     });
//     await waitFor(() => {
//       expect(getByTestId('login-btn')).toBeTruthy();
//     });
//     // console.log('TEST', getAllByTestId('login'));
//     // Check that the login text is rendered
//     // const loginText = getByTestId('login-btn');
//     // expect(loginText).toBeTruthy();
//   });

//   it.skip('Should login inside the app', async () => {
//     const credentials = {
//       username: 'eve.holt@reqres.in',
//       password: 'cityslicka',
//     };

//     // Mock the RTK Query hook to resolve successfully with a token
//     const loginMutationMock = jest.fn().mockResolvedValue({
//       data: {
//         token: 'mocked_token',
//         user: {id: 1, name: 'Test User'},
//       },
//     });
//     (useUserLoginMutation as jest.Mock).mockReturnValue([
//       loginMutationMock,
//       {isLoading: false, error: null},
//     ]);

//     const {getByTestId} = renderWithProviders(<LoginScreen />, {
//       preloadedState: {
//         auth: initialAuthState,
//       },
//     });

//     // Simulate button press using getByTestId for the login button
//     const loginBtn = getByTestId('login-btn');
//     fireEvent.press(loginBtn);

//     // Wait for the loginMutation to be called with the credentials
//     await waitFor(() => {
//       expect(loginMutationMock).toHaveBeenCalledWith(credentials);
//     });

//     // Check if loginSuccess is dispatched
//     await waitFor(() => {
//       expect(dispatchMock).toHaveBeenCalledWith(
//         loginSuccess({
//           token: 'mocked_token',
//           user: {id: 1, name: 'Test User'},
//         }),
//       );
//     });
//   });
// });
