import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './index'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  render: () => (
    <Checkbox id="test" label="I accept the terms and conditions" />
  ),
}
