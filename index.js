require('@rushstack/eslint-patch/modern-module-resolution');

const eslintConfig = {
  extends: ['./base', './typescript', './import', './esm', 'prettier'],
};

// eslint-disable-next-line no-undef
module.exports = eslintConfig;
