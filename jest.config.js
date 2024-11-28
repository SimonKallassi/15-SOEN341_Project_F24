module.exports = {
  moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/tests/frontend'], // Explicitly points to your tests folder
};
