/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.liftNodes({ at: [0, 1] })
}

export const input = (
  <value>
    <block>
      <block>one</block>
      <block>two</block>
      <block>three</block>
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <block>one</block>
    </block>
    <block>two</block>
    <block>
      <block>three</block>
    </block>
  </value>
)