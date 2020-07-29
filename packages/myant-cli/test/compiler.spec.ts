import genSiteDesktopShared from '../src/compiler/gen-site-desktop-shared'
import { genSiteMobileShared } from '../src/compiler/gen-site-mobile-shared'
import { compileSite } from '../src/compiler/compile-site'

describe.only('compiler dirs', () => {
  test('gen site desktop shared file', () => {
    genSiteDesktopShared()
    // genSiteMobileShared()
    console.log(11)
  })
  test('gen site mobile shared file', () => {
    genSiteMobileShared()
  })
})
