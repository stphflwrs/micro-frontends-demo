const JestConfig = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '../_jest/setup.ts',
  ],
};

module.exports = JestConfig;
