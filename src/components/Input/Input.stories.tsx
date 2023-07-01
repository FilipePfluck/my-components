import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'
import { MdMail } from 'react-icons/md'
import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: Input,
  args: {
    placeholder: 'This is an input',
  },
}

export const Disabled: Story = {
  render: Input,
  args: {
    placeholder: 'I am disabled',
    disabled: true,
  },
}

export const Error: Story = {
  render: Input,
  args: {
    placeholder: 'I have an error',
    'aria-invalid': true,
  },
}

export const WithIcon: Story = {
  render: Input,
  args: {
    placeholder: 'Email',
    type: 'email',
    icon: <MdMail />,
  },
}

export const Password: Story = {
  render: PasswordInput,
}
