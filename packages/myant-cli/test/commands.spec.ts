import { build } from '../lib/commands/build'
import { buildSite } from '../lib/commands/build-site'
import { setNodeEnv } from '../lib/common'

describe.only('command describe', () => {
  test('build mini production', async (done) => {
    let cwd = process.cwd()
    console.log(cwd)
    await build()
    done()
  })

  test(
    'build desktop site',
    async () => {
      setNodeEnv('production')
      return new Promise(async (resolve, reject) => {
        await buildSite({
          platform: 'mp-weixin',
          target: 'site',
        })
        resolve()
      })
    },
    1000 * 60 * 10
  )

  test.only(
    'build mini site',
    async () => {
      setNodeEnv('production')
      return new Promise(async (resolve, reject) => {
        await buildSite({
          platform: 'mp-weixin',
          target: 'mini',
        })
        resolve()
      })
    },
    1000 * 60 * 10
  )
})
