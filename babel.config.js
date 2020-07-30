const { BABEL_MODULE, NODE_ENV } = process.env
const isTest = NODE_ENV === 'test'
const useESModules = BABEL_MODULE !== 'commonjs' && !isTest

module.exports = {
  //presets: ['@myant/cli/preset'],

  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: useESModules ? false : 'commonjs',
      },
    ],
    [
      '@vue/babel-preset-jsx',
      {
        functional: false,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        useESModules,
      },
    ],
    [
      'import',
      {
        libraryName: 'myant',
        libraryDirectory: useESModules ? 'es' : 'lib',
        style: true,
      },
      'myant',
    ],
    '@babel/plugin-transform-object-assign',
  ],
}
