const ignorePatterns = ['node_modules'];

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  globals: {
    __VERSION__: 'test',
  },
  clearMocks: true,
  moduleDirectories: ['node_modules', '<rootDir>', './src', './src/components'],
  collectCoverageFrom: ['src/**/*.ts?(x)'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = config;
