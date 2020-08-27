import { build } from '../lib/commands/build'
import { buildSite } from '../lib/commands/build-site'
import { devMini } from '../lib/commands/dev'
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

  test(
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

  test(
    'dev mini site',
    async () => {
      setNodeEnv('development')
      return new Promise(async (resolve, reject) => {
        await devMini({
          platform: 'mp-weixin',
          target: 'mini',
        })
        resolve()
      })
    },
    1000 * 60 * 10
  )

  test.only(
    'dev site server',
    async () => {
      setNodeEnv('development')
      return new Promise(async (resolve, reject) => {
        await devMini({
          target: 'site',
        })
        resolve()
      })
    },
    1000 * 60 * 10
  )
})
