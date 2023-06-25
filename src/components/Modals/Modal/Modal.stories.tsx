// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogRoot, DialogTrigger } from './index'
import { css } from '@/styled-system/css'
import { Button } from '@/components/Button'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
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
