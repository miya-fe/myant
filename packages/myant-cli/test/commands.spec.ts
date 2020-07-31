import { build } from '../lib/commands/build'
import { buildSite } from '../lib/commands/build-site'
import { setNodeEnv } from '../src/common'

describe.only('command describe', () => {
  test('build mini production', async (done) => {
    let cwd = process.cwd()
    console.log(cwd)
    await build()
    done()
  })

  test.only(
    'build desktop or mini site',
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
})
