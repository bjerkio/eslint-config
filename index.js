require('@rushstack/eslint-patch/modern-module-resolution');

const eslintConfig = {
  extends: ['./base', './typescript', './import', 'prettier'],
};

// eslint-disable-next-line no-undef
module.exports = eslintConfig;
