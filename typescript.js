const eslintConfigTypescript = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    /**
     * Require explicit return types on functions and class methods
     *
     * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
     */
    '@typescript-eslint/explicit-module-boundary-types': 'warn',

    /**
     * Require a consistent member declaration order.
     *
     * @see https://typescript-eslint.io/rules/member-ordering
     */
    '@typescript-eslint/member-ordering': 'error',

    /**
     * Disallow unused variables.
     *
     * Exceptions:
     * - Variables that start with an underscore
     * - Rest siblings
     * - Caught errors
     *
     * @see https://typescript-eslint.io/rules/no-unused-vars
     */
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],

    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
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
    {
      files: ['*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
  ],
};

// eslint-disable-next-line no-undef
module.exports = eslintConfigTypescript;
