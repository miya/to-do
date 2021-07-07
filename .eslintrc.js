const config = {
  extends: [
    'weseek',
    'weseek/react',
  ],
  plugins: [],
  parserOptions: {},
  env: {browser: true},
  globals: {},
  rules: {
    'object-curly-newline': ['off']
  },
};

if (process.env.DISABLE_ESLINT) {
  config.ignorePatterns = ['src/components/**', 'src/utils/**','src/**'];
};

module.exports = config;
