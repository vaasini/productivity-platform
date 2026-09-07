/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: ["**/dist/**", "**/node_modules/**", "*.cjs"],
  overrides: [
    {
      files: ["packages/frontend/**/*.{ts,tsx}"],
      env: {
        browser: true,
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
