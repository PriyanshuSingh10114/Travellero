import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import node from 'eslint-plugin-n'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'build']),

  // Common JS rules
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      prettier, // disables formatting conflicts
    ],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
    },
  },

  // Backend (Node.js)
  {
    files: ['backend/**/*.{js}'],
    plugins: { node },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-console': 'off',
      'node/no-unsupported-features/es-syntax': 'off',
    },
  },

  // Frontend (React)
  {
    files: ['frontend/**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Custom rules
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'warn',

      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
])