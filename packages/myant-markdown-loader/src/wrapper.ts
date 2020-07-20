/**
 * 把html转换为PC端的vue组件
 * @param html
 */
export function toMobileComponent(html: string): string {
  return `
    <template>
        {toCardSection(html)}
    </template>
  `
}

/**
 * 把html中的片段按照H标签自动分拆为独立的每块（主要用于浏览是排版好看）
 * @param html
 */
export function toCardSection(html: string): string {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')

  return group
    .map((fragment) => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="card">${fragment}</div>`
      }

      return fragment
    })
    .join('')
}
