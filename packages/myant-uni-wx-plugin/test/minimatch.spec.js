const minimatch = require('minimatch')

test('wx plugin', () => {
  let list = minimatch.match(
    ['pages/index/index.json', 'pages/hidetabIndex/index.json', 'pages/order/index.json', 'pages/store/index.json', 'pages/goods/index.json'],
    'pages/{hidetabIndex,index}/*.json',
    {
      matchBase: true,
    }
  )

  console.log(list)
})
