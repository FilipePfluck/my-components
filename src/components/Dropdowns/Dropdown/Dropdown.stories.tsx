import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './index'
import { Button } from '@/components/Button'
import { css } from '@/styled-system/css'

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
}

export default meta
type Story = StoryObj<typeof Dropdown>

const items = [
  {
    groupName: 'Shortcuts',
    items: [
      {
        itemLabel: 'New Tab',
        rightSlot: '⌘+T',
        onClick: () => console.log('New tab'),
      },
      { itemLabel: 'New window', rightSlot: '⌘+N' },
      { itemLabel: 'Save page as', rightSlot: '⌘+S' },
    ],
  },
  {
    groupName: 'Other actions',
    items: [
      { itemLabel: 'Create Shortcut' },
      { itemLabel: 'Name Window' },
      { itemLabel: 'Developer Tools' },
    ],
  },
]

const items2 = [
  {
    items: [
      {
        itemLabel: 'Awesome Item 1',
      },
      {
        itemLabel: 'Awesome Item 2',
      },
      {
        itemLabel: 'Awesome Item 3',
      },
    ],
  },
]

export const Example1: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Dropdown items={items}>
        <Button intent="primary" size="md">
          Click me
        </Button>
      </Dropdown>
    </div>
  ),
}

export const Example2: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Dropdown items={items2}>
        <Button intent="primary" size="md">
          Click me
        </Button>
      </Dropdown>
    </div>
  ),
}
