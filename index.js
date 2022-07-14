/**
 * This eslint config is derived work from @runeh and Indiv AS:
 * https://github.com/runeh/typical-fetch/blob/main/.eslintrc.json
 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'import', 'unicorn'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    eqeqeq: ['error', 'smart'],
    'eslint-comments/no-unused-disable': 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'no-console': 'error',
    'no-restricted-globals': [
      'error',
      'event',
      'isNaN',
      'location',
      'name',
      'parseInt',
    ],
    'no-return-await': 'error',
    'prefer-arrow-callback': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-', '=', '#__PURE__'],
        markers: ['/'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
