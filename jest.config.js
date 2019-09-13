/** @type {Partial<jest.GlobalConfig>} */
const JestConfig = {
  projects: ['components/[!_]*'],
  setupFilesAfterEnv: [
    './components/_jest/setup.ts',
  ],
};

module.exports = JestConfig;
