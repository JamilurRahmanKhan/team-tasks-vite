const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  { ignores: ["dist", "node_modules", "coverage"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    },
    plugins: {
      // typescript-eslint provides recommended configs + rules
    },
    extends: [
      ...tseslint.configs.recommended,
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/recommended",
      "prettier",
    ],
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);
