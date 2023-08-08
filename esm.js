require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 **/
const eslintConfigBasic = {
  plugins: ['unicorn', 'import'],
  rules: {
    /**
     * Prefer using ESM over legacy CommonJS modules
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
     */
    'unicorn/prefer-module': 'error',

    /**
     * Prefer using the `node:` protocol when importing Node.js builtin modules
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
     */
    'unicorn/prefer-node-protocol': 'error',

    /**
     * Prefer top-level await over top-level promises and async function calls
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
     */
    'unicorn/prefer-top-level-await': 'error',

    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/no-commonjs': 'error',
  },
};

// eslint-disable-next-line no-undef
module.exports = eslintConfigBasic;
