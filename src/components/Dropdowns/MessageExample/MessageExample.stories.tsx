import type { Meta, StoryObj } from '@storybook/react'

import { MessageExampleDropdown } from './index'

const meta: Meta<typeof MessageExampleDropdown> = {
  component: MessageExampleDropdown,
}

export default meta
type Story = StoryObj<typeof MessageExampleDropdown>

export const Example1: Story = {
  render: MessageExampleDropdown,
}
