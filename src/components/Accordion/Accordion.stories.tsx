import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from './index'
import { css } from '@/styled-system/css'

const meta: Meta<typeof Accordion> = {
  component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

const data = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it styled?',
    content: 'Yes, it comes with beautifull styles by default.',
  },
  {
    id: 'item-3',
    title: 'Is it animated?',
    content: 'Yes, it comes with beautifull animations by default.',
  },
]

const data2 = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it styled?',
    content: 'Yes, it comes with beautifull styles by default.',
  },
  {
    id: 'item-3',
    title: 'Is it animated?',
    content: 'Yes, it comes with beautifull animations by default.',
  },
  {
    id: 'item-4',
    title: 'Can multiple itens be open?',
    content: 'Yes, more than one item can be expanded at the same time.',
  },
]

export const Single: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4',
      })}
    >
      <Accordion type="single" items={data} />
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4',
      })}
    >
      <Accordion type="multiple" items={data2} />
    </div>
  ),
}
