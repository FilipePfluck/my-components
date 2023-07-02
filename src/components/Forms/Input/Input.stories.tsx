import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'
import { MdMail } from 'react-icons/md'
import { PasswordInput } from './PasswordInput'
import { Label } from '../Label'
import { HelperMessage } from '../HelperMessage'

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
    icon: <MdMail />,
  },
}

export const Error: Story = {
  render: Input,
  args: {
    placeholder: 'I have an error',
    'aria-invalid': true,
    icon: <MdMail />,
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

export const WithLabel: Story = {
  render: () => {
    return (
      <div>
        <Label htmlFor="email" isRequired>
          Email
        </Label>
        <Input
          id="email"
          placeholder="joedoe@gmail.com"
          aria-describedby="email-helper-message"
          aria-required
        />
        <HelperMessage id="email-helper-message">
          We will never share your email with anyone
        </HelperMessage>
      </div>
    )
  },
}
