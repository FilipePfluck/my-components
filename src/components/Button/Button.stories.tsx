import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './index'
import { css } from '@/styled-system/css'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4',
      })}
    >
      <Button intent="primary" size="sm">
        <p>Hello Storybook</p>
      </Button>
      <Button intent="primary" size="md">
        Hello Storybook
      </Button>
      <Button intent="primary" size="lg">
        Hello Storybook
      </Button>
    </div>
  ),
}

export const Secondary: Story = {
  render: () => (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4',
      })}
    >
      <Button intent="secondary" size="sm">
        <p>Hello Storybook</p>
      </Button>
      <Button intent="secondary" size="md">
        Hello Storybook
      </Button>
      <Button intent="secondary" size="lg">
        Hello Storybook
      </Button>
    </div>
  ),
}
