import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: ['node_modules', 'dist'], // Replace your .eslintignore content here
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Adjust for your project
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
      globals: {
        // Define environment-specific globals
        process: 'readonly', // Node.js
        module: 'readonly', // Node.js
        require: 'readonly', // Node.js
        __dirname: 'readonly', // Node.js
        jest: 'readonly', // Jest testing
        describe: 'readonly', // Jest
        it: 'readonly', // Jest
        expect: 'readonly', // Jest
      },
    },
    plugins: {
      import: importPlugin,
      jest: jestPlugin,
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'no-inner-declarations': 'off',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
];
