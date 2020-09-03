let { basename } = require('path')
let SRC_DIR = '/Users/admin/src'
let filePath = '/Users/admin/src/my-button/index.vue'
function run() {
  let fileName = basename(filePath),
    dirs = filePath
      .replace(SRC_DIR, '')
      .split('/')
      .filter((dir) => dir !== '')

  console.log(filePath.replace(/\/([^\/]+)\/index.vue$/, '/$1/$1.vue'))
  if (fileName === 'index.vue' && dirs.length === 2) {
    return true
  } else {
    return false
  }
}

console.log(run())
