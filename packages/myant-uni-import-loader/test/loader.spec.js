const importLoader = require('../src/index')
const fs = require('fs')
const path = require('path')

test('myant uni plugin import', () => {
  let content = fs.readFileSync(path.join(__dirname, './test.vue'))
  let str = importLoader(content)

  console.log(str)
})
