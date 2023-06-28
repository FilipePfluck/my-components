import type { Meta, StoryObj } from '@storybook/react'

import { RadixExampleDropdown } from './index'

const meta: Meta<typeof RadixExampleDropdown> = {
  component: RadixExampleDropdown,
}

export default meta
type Story = StoryObj<typeof RadixExampleDropdown>

export const Example1: Story = {
  render: RadixExampleDropdown,
}
