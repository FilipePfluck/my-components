import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './index'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const items = [
  { id: 'r1', label: 'Default' },
  { id: 'r2', label: 'Comfortable' },
  { id: 'r3', label: 'Compact' },
]

export const Primary: Story = {
  render: () => <RadioGroup items={items} />,
}
