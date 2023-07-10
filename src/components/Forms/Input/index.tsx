import { useFormControl } from '@/hooks/useFormControl'
import { ReactNode } from 'react'

import * as S from './styles'
import { SimpleSpread } from '@/types/utils'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ExtraInputProps {
  icon?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
  size?: 'sm' | 'md'
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
}

interface InputProps
  extends SimpleSpread<HTMLStyledProps<'input'>, ExtraInputProps> {}

export const Input = ({
  icon,
  leftElement,
  rightElement,
  size,
  width,
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
    <S.InputContainer size={size} width={width} className="group">
      {icon && <S.InputIcon>{icon}</S.InputIcon>}
      {leftElement}
      <S.Input size={size} {...formControlProps} {...props} />
      {rightElement}
    </S.InputContainer>
  )
}
