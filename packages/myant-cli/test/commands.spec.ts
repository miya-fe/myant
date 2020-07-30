import { build } from '../src/commands/build'
import { buildSite } from '../src/commands/build-site'
import { join } from 'path'

describe.only('command describe', () => {
  test('build mini production', async (done) => {
    let cwd = process.cwd()
    console.log(cwd)
    await build()
    done()
  })

  test.only('build desktop or mini site', async (done) => {
    await buildSite({
      platform: 'mp-weixin',
      target: 'site',
    })
    done()
  })
})
