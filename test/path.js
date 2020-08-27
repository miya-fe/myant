const { basename } = require('path')
const SRC_DIR = '/aaa'

console.log(basename('/aaa/bbbb/ccc/'))
function run(filePath) {
  let fileName = basename(filePath),
    dirs = filePath
      .replace(SRC_DIR, '')
      .split('/')
      .filter((dir) => dir !== '')
  console.log(dirs)
  if (fileName === 'index.vue' && dirs.length === 3) {
    return true
  } else {
    return false
  }
}

console.log(run('/aaa/bbbb/ccc/index.vue'))

let url = '/aaa/bbbb/ccc/index.vue'
url = url.replace(/\/(\w+)\/index.vue$/, '/$1/$1.vue')

console.log(url)
