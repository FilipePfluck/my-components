import { button, type ButtonVariant } from '@/styled-system/recipes'
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'

interface ButtonProps
  extends ButtonVariant,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonComponent = (
  { children, intent, size, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <button className={button({ intent, size })} ref={ref} {...props}>
      {children}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent,
)
