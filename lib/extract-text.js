import { convert } from 'html-to-text'

const extractText = (props = { length: 80, more: '...' }) => {
  const text = convert(props.html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } }
    ]
  })
  return text.slice(0, props.length) + props.more
}
export { extractText }
