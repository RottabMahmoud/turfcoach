module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/tests/**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
