import type { Meta, StoryObj } from '@storybook/react'

import { RadixExampleDropdown } from './implementations/ExampleDropdown'
import { MessageExampleDropdown } from './implementations/MessageDropdown'

const meta: Meta<typeof RadixExampleDropdown> = {
  component: RadixExampleDropdown,
}

export default meta
type Story = StoryObj<typeof RadixExampleDropdown>

export const RadixExample: Story = {
  render: RadixExampleDropdown,
}

export const MessageExample: Story = {
  render: MessageExampleDropdown,
}
