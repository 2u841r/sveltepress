import { describe, expect, it } from 'vitest'
import { compile } from 'mdsvex'
import links from '../src/markdown/links'

const md = `
## Foo

[foo](https://www.google.com/)

`

describe('links', () => {
  it('simple', async () => {
    const r = await compile(md, {
      remarkPlugins: [links, () => (tree) => {
        expect(JSON.stringify(tree, null, 2)).toMatchSnapshot()
      }],
    })
    expect(r).toMatchInlineSnapshot(`
      {
        "code": "
      <h2>Foo</h2>
      <p><Link to=\\"https://www.google.com/\\" label=\\"foo\\" /></p>
      ",
        "data": {
          "anchors": [],
        },
        "map": "",
      }
    `)
  })
})