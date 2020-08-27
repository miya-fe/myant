import markdownLoader, { parser } from '../lib/index'
import fs from 'fs'
import { join } from 'path'

describe('test markdown loader', () => {
  test('parser markdown string to html', () => {
    let result = parser.render('## 标题2')
    expect(result).toEqual(`<h2 id="biao-ti2">标题2</h2>\n`)
  })

  test('parser markdown string to html and to mobile component', () => {
    // let result = markdownLoader('## 标题2\n### 标题3')
    let result = markdownLoader(fs.readFileSync(join(__dirname, './README.md')))
    console.log(result)
    expect(result).toEqual(`<template>
  <h2 id="biao-ti2">标题2</h2>
<div class="card"><h3 id="biao-ti3">标题3</h3>
</div>
</template>`)
  })
})
