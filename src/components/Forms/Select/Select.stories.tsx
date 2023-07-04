import type { Meta, StoryObj } from '@storybook/react'

import { FoodSelect } from './implementations/FoodsSelect'
import { CountrySelect } from './implementations/CountriesSelect'

const meta: Meta<typeof FoodSelect> = {
  component: FoodSelect,
}

export default meta
type Story = StoryObj<typeof FoodSelect>

export const Foods: Story = {
  render: FoodSelect,
}

export const Countries: Story = {
  render: CountrySelect,
}
