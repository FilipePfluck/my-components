import { MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { Input } from '.'
import { useState } from 'react'
import { styled } from '@/styled-system/jsx'
import { inputIconButton } from '@/styled-system/recipes'

const InputIconButton = styled('button', inputIconButton)

export const PasswordInput = () => {
  const [shouldShowPassowrd, setShouldShowPassword] = useState(false)

  const buttonAriaLabel = shouldShowPassowrd
    ? "Don't show the password"
    : 'Show the password'

  return (
    <Input
      placeholder="Password"
      type={shouldShowPassowrd ? 'text' : 'password'}
      icon={<MdLock />}
      rightElement={
        <InputIconButton
          aria-label={buttonAriaLabel}
          onClick={() => setShouldShowPassword((state) => !state)}
        >
          {shouldShowPassowrd ? <MdVisibilityOff /> : <MdVisibility />}
        </InputIconButton>
      }
    />
  )
}
