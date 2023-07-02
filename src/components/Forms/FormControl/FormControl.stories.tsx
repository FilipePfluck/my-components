import type { Meta, StoryObj } from '@storybook/react'

import { FormControl } from './index'
import { Input } from '../Input'
import { MdMail } from 'react-icons/md'

const meta: Meta<typeof FormControl> = {
  component: FormControl,
}

export default meta
type Story = StoryObj<typeof FormControl>

export const Default: Story = {
  render: () => {
    return (
      <FormControl
        helperMessage="We will never share your email with anyone"
        id="email"
        label="Email"
        isRequired
      >
        <Input placeholder="Email" icon={<MdMail />} />
      </FormControl>
    )
  },
}
