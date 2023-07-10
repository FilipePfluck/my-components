import { Provider } from '@radix-ui/react-tooltip'

import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './index'
import { IconButton } from '../IconButton'
import { MdQuestionMark } from 'react-icons/md'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Primary: Story = {
  render: () => (
    <Provider>
      <Tooltip message="This is a tooltip">
        <IconButton>
          <MdQuestionMark />
        </IconButton>
      </Tooltip>
    </Provider>
  ),
}
