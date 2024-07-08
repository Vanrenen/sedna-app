module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^@components/(.*)$": "<rootDir>/src/components/$1",
      "^@styles/(.*)$": "<rootDir>/src/styles/$1"
    }
  };
  