import type { Meta, StoryObj } from '@storybook/react'

import { ReadMore } from './index'

const meta: Meta<typeof ReadMore> = {
  component: ReadMore,
}

export default meta
type Story = StoryObj<typeof ReadMore>

export const LongText: Story = {
  render: () => (
    <ReadMore
      id="long-text"
      amountOfWords={25}
      maxW="640px"
      text="One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty, Twenty-one, Twenty-two, Twenty-three, Twenty-four, Twenty-five, Twenty-six, Twenty-seven, Twenty-eight, Twenty-nine, Thirty, Thirty-one, Thirty-two, Thirty-three, Thirty-four, Thirty-five, Thirty-six, Thirty-seven, Thirty-eight, Thirty-nine, Forty, Forty-one, Forty-two, Forty-three, Forty-four, Forty-five, Forty-six, Forty-seven, Forty-eight, Forty-nine, Fifty."
    />
  ),
}

export const ShortText: Story = {
  render: () => (
    <ReadMore
      id="short-text"
      maxW="600px"
      amountOfWords={25}
      text="One, Two, Three, Four, Five"
    />
  ),
}
