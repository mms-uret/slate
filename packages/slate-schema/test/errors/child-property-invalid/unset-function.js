/** @jsx jsx */

import { jsx } from '../../helpers'

export const schema = {
  elements: {
    a: {
      validate: {
        children: [
          {
            match: {
              properties: {
                key: v => v == null,
              },
            },
          },
        ],
      },
    },
  },
}

export const input = (
  <value>
    <a>
      <b key={false}>word</b>
    </a>
  </value>
)

export const output = (
  <value>
    <a>
      <b key={null}>word</b>
    </a>
  </value>
)
