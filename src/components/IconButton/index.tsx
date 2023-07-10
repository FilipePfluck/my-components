import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButtonComponent = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.Container ref={ref} {...props}>
      {children}
    </S.Container>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  IconButtonComponent,
)
