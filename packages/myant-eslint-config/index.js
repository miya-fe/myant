module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended', 'prettier', 'prettier/vue'],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module',
    jsx: true,
    extraFileExtensions: ['.vue'], // The default extensions are .ts, .tsx, .js, and .jsx
  },

  plugins: [],

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
