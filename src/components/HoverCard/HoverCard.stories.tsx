import type { Meta, StoryObj } from '@storybook/react'
import { Social } from './implementations/Social'

const meta: Meta<typeof Social> = {
  component: Social,
}

export default meta
type Story = StoryObj<typeof Social>

export const Primary: Story = {
  render: () => <Social />,
}
