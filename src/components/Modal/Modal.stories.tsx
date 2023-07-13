import type { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogRoot, DialogTrigger } from './index'
import { css } from '@/styled-system/css'
import { Button } from '@/components/Button'
import { AnimatedDialog } from './implementations/Animated'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

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
      <DialogRoot>
        <DialogTrigger asChild>
          <Button intent="primary" size="md">
            Open the modal
          </Button>
        </DialogTrigger>
        <Dialog title="This is a title" description="this is a description">
          Hello world
        </Dialog>
      </DialogRoot>
    </div>
  ),
}

export const Animated: Story = {
  render: AnimatedDialog,
}
