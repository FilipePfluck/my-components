import type { Meta, StoryObj } from '@storybook/react'
import { SigninTabs } from './implementations/SigninTabs'
import { VegetableTabs } from './implementations/VegetableTabs'
import { ProteicTabs } from './implementations/ProteicTabs'

const meta: Meta<typeof SigninTabs> = {
  component: SigninTabs,
}

export default meta
type Story = StoryObj<typeof SigninTabs>

export const Signin: Story = {
  render: SigninTabs,
}

export const Vegetables: Story = {
  render: VegetableTabs,
}

export const Protein: Story = {
  render: ProteicTabs,
}
