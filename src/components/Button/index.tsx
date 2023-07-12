import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

const ButtonComponent = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.ButtonContainer ref={ref} {...props}>
      {children}
    </S.ButtonContainer>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
