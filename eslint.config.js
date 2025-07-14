import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";


export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Browser globals
        window: true,
        document: true,
        navigator: true,
        setInterval: true,
        clearInterval: true,
        // Node.js globals
        process: true,
        __dirname: true,
        console: true,
        fetch: true,
        setTimeout: true,
        // React globals
        React: true,
        // React Router globals
        useNavigate: true,
        useLocation: true
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-unused-vars": ["warn", {
        "varsIgnorePattern": "^(React|Motion.*|.*Variants)$",
        "args": "none",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_",
        "caughtErrors": "none",
        "vars": "all"
      }],
      "no-undef": "error"
    }
  }
];
