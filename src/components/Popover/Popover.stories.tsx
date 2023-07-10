import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './index'
import { DimensionsPopover } from './implementations/DimensionsPopover'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Dimensions: Story = {
  render: DimensionsPopover,
}
