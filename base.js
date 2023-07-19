require('@rushstack/eslint-patch/modern-module-resolution');

const eslintConfigBasic = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
  ],
  plugins: ['unicorn'],
  rules: {
    /**
     * Enforce consistent brace style for all control statements
     * @see https://eslint.org/docs/rules/curly
     */
    curly: 'error',

    /**
     * Require the use of === and !==
     * @see https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: ['error', 'smart'],

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

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     *
     * In our case, we want to use single quotes for strings.
     * @see https://eslint.org/docs/latest/rules/quotes
     */
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],

    /**
     * Enforce consistent spacing after the \// or \/* in a comment
     *
     * @see https://eslint.org/docs/latest/rules/spaced-comment
     */
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-', '=', '#__PURE__'],
        markers: ['/'],
      },
    ],

    /**
     * Enforces all linted files to have their names in kebab-case.
     * E.g. my-component.tsx
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     */
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],

    'eslint-comments/no-unused-disable': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
      },
    },
  ],
};

// eslint-disable-next-line no-undef
module.exports = eslintConfigBasic;
