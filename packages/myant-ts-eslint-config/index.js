module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/recommended', 'prettier', 'prettier/vue'],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
    jsx: true,
    extraFileExtensions: ['.vue'], // The default extensions are .ts, .tsx, .js, and .jsx
  },

  plugins: ['@typescript-eslint'],

  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },

  rules: {
    'no-new': 'off',

    // eslint-plugin-import

    // eslint-plugin-vue
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',

    // typescript-eslint
  },
}
