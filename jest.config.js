module.exports = {
  setupFiles: ['<rootDir>/src/setupTests.js'],
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./app/tests/mocks/FileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};