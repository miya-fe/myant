const loaderUtils = require('loader-utils')
const { log, done, logWithSpinner, stopSpinner } = require('@vue/cli-shared-utils')

type Options = {
  libraryName: string | 'myant'
  customName?: (name: string) => string
  libraryDirectory: string | 'lib'
}

function buildComponentPath(options: Options, names: string[]): string {
  return names
    .map((name) => {
      if (options.customName) {
        return options.customName(name)
      } else {
        return `import ${name} from '${options.libraryName}/${options.libraryDirectory}/${name}'`
      }
    })
    .join('\n')
}

module.exports = function (content: string | Buffer): string {
  let options = loaderUtils.getOptions(this) || {}
  if (!options.libraryName) {
    options.libraryName = 'myant'
  }
  if (!options.libraryDirectory) {
    options.libraryDirectory = 'lib'
  }

  let regexStr = `import\\s+\\{[^\\}]+\\}\\s+from\\s+[\\'|\\"]${options.libraryName}[\\'|\\"]`
  let regex = new RegExp(regexStr, 'g')
  if (content instanceof Buffer) {
    content = content.toString()
  }

  content = content.replace(regex, (name: string) => {
    log(name)
    let compNames = name.replace(/import\s+\{|\}.*|\s*/g, '').split(',')
    let componentPath = buildComponentPath(options, compNames)
    log(componentPath)
    return `\n${componentPath}\n`
  })

  return content
}
