import { button, type ButtonVariant } from '@/styled-system/recipes'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends ButtonVariant,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, intent, size, ...props }: ButtonProps) => {
  return (
    <button className={button({ intent, size })} {...props}>
      {children}
    </button>
  )
}
