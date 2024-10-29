module.exports = {
  preset: 'react-native',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.js',
    '<rootDir>/declarations.d.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    // '^.+\\.jsx$': 'babel-jest',
    // '^.+\\.tsx?$': [
    //   'ts-jest',
    // {
    //   tsconfig: 'tsconfig.spec.json',
    // },
    // ],
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-navigation|@react-navigation/drawer|@react-navigation/stack|@react-navigation/native-stack|react-native-vector-icons|react-redux|@reduxjs/toolkit)',
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.test.tsx?(x)',
    '<rootDir>/src/**/*.test.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  maxWorkers: 1,
  moduleNameMapper: {
    '@tests': '<rootDir>/__tests__/$1',
    '@src/(.*)': '<rootDir>/src/$1',
    '@api/(.*)': '<rootDir>/src/api/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@common/(.*)': ['<rootDir>/src/components/common/$1'],
    '@context/(.*)': '<rootDir>/src/context/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@authentication/(.*)': '<rootDir>/src/features/authentication/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@i18n/(.*)': '<rootDir>/src/i18n/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@navigation/(.*)': '<rootDir>/src/navigation/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@themes/(.*)': '<rootDir>/src/themes/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
};
