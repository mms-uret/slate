/** @jsx jsx */

import { jsx } from '../../helpers'

export const input = (
  <value>
    <block>
      <block>one</block>
    </block>
  </value>
)

export const run = editor => {
  const block = editor.value.children[0]
  return editor.hasTexts(block)
}

export const output = false