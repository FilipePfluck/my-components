import { useFormControl } from '@/hooks/useFormControl'
import { InputHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

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
    <S.InputContainer className="group">
      {icon && <S.InputIcon>{icon}</S.InputIcon>}
      {leftElement}
      <S.Input {...formControlProps} {...props} />
      {rightElement}
    </S.InputContainer>
  )
}
