import hl from 'highlight.js'

export default function highlight(str: string, lang: string) {
  if (lang && hl.getLanguage(lang)) {
    return hl.highlight(lang, str, true).value
  }

  return ''
}
