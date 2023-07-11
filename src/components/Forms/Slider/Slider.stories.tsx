import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './index'
import { VolumeSlider } from './implementations/VolumeSlider'

const meta: Meta<typeof Slider> = {
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Volume: Story = {
  render: VolumeSlider,
}
