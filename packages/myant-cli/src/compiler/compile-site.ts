import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import { get } from 'lodash'
import address from 'address'
import { getPort } from 'portfinder'
import consola from 'consola'
import { getSiteDevWebpackConfig } from '../config/webpack.site.dev'
import { getSiteProdWebpackConfig } from '../config/webpack.site.prod'

/**
 * 打包组件
 */
async function build() {
  let config = getSiteProdWebpackConfig()

  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        consola.error(err)
        consola.error(stats.compilation.errors)
        reject(err)
      } else {
        consola.log('build!!!')
        resolve()
      }
    })
  })
}

function logSiteServerInfo(port: number) {
  const local = `http://localhost:${port}/`
  const network = `http://${address.ip()}:${port}/`

  consola.log('  Site running at:')
  consola.log(`  Local:    ${local} `)
  consola.log(`  Network:  ${network}`)
}

function runSiteDevServer(port: number, config: ReturnType<typeof getSiteDevWebpackConfig>) {
  const server = new WebpackDevServer(webpack(config), config.devServer)

  // this is a hack to disable wds status log
  ;(server as any).showStatus = function () {}
  const host = get(config.devServer, 'host', 'localhost')
  server.listen(port, host, (err?: Error) => {
    if (err) {
      console.log(err)
    }
  })
}

/**
 * 开启组件站点打包服务
 */
function runSiteWatch() {
  let config = getSiteDevWebpackConfig()

  getPort(
    {
      port: config.devServer!.port,
    },
    (err, port) => {
      if (err) {
        console.log(err)
        return
      }

      logSiteServerInfo(port)
      runSiteDevServer(port, config)
    }
  )
}

export async function compileSite(isProduction: boolean = false) {
  if (isProduction) {
    await build()
  } else {
    runSiteWatch()
  }
}
