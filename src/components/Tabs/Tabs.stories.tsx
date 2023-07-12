import type { Meta, StoryObj } from '@storybook/react'
import { SigninTabs } from './implementations/SigninTabs'
import { FoodTabs } from './implementations/FramerMotion'
import { VegetableTabs } from './implementations/VegetableTabs'

const meta: Meta<typeof SigninTabs> = {
  component: SigninTabs,
}

export default meta
type Story = StoryObj<typeof SigninTabs>

export const Signin: Story = {
  render: SigninTabs,
}

export const Foods: Story = {
  render: FoodTabs,
}

export const Vegetables: Story = {
  render: VegetableTabs,
}
