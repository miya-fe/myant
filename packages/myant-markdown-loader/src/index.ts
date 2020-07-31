import MarkdownIt from 'markdown-it'
import { slugify } from 'transliteration'
import markdownItAnchor from 'markdown-it-anchor'
import highlight from './highlight'
import { toMobileComponent } from './wrapper'

const parser = new MarkdownIt({
  html: true,
  highlight,
}).use(markdownItAnchor, {
  level: 2,
  slugify,
})

export default function (content: string | Buffer): string {
  if (Buffer.isBuffer(content)) {
    content = content.toString()
  }

  let template = parser.render(content)
  console.log('====template=====')
  console.log(template)
  let result = toMobileComponent(template)
  console.log(result)
  console.log('====template=====')
  return result
}

export { parser }
