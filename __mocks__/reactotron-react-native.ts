interface Reactotron {
  configure: () => Reactotron;
  useReactNative: () => Reactotron;
  connect: () => Reactotron;
  clear: () => Reactotron;
  log: (message?: any) => void;
  warn: (message?: any) => void;
  error: (message?: any) => void;
  debug: (message?: any) => void;
  logImportant: (message?: any) => void;
  display: (options: {name: string; value?: any}) => void;
}

const mockReactotron: Reactotron = {
  configure: jest.fn(() => mockReactotron),
  useReactNative: jest.fn(() => mockReactotron),
  connect: jest.fn(() => mockReactotron),
  clear: jest.fn(() => mockReactotron),
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  logImportant: jest.fn(),
  display: jest.fn(),
};

export default mockReactotron;
