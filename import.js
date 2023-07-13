const eslintConfigImport = {
  plugins: ['import'],
  rules: {
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
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  overrides: [
    {
      files: 'jest.config.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};

// eslint-disable-next-line no-undef
module.exports = eslintConfigImport;
