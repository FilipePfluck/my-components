import { useFormControl } from '@/hooks/useFormControl'
import { styled } from '@/styled-system/jsx'
import {
  inputContainer,
  inputElement,
  inputIcon,
} from '@/styled-system/recipes'
import { InputHTMLAttributes, ReactNode } from 'react'

const InputContainer = styled('label', inputContainer)
const InputElement = styled('input', inputElement)
const InputIcon = styled('div', inputIcon)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export const Input = ({
  icon,
  leftElement,
  rightElement,
  ...props
}: InputProps) => {
  const formControlData = useFormControl()

  const { id, ariaInvalid, isRequired } = formControlData || {}

  const formControlProps = {
    id: `${id}-form-element`,
    ...(ariaInvalid && { 'aria-invalid': true }),
    ...(isRequired && { 'aria-required': true }),
  }

  return (
    <InputContainer className="group">
      {icon && <InputIcon>{icon}</InputIcon>}
      {leftElement}
      <InputElement {...formControlProps} {...props} />
      {rightElement}
    </InputContainer>
  )
}
