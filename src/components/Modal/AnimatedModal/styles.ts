import { css, cva } from '@/styled-system/css'
import { dialogContentStyles } from '../styles'

export const modalContentStyles = css({
  ...dialogContentStyles,
  _focus: {
    outline: 'none',
  },
})

export const modalNameStyles = css({ fontSize: 'xl', fontWeight: 500 })

export const modalDescriptionStyles = css({ fontSize: 'sm', color: 'gray.800' })

export const animatedTriggerStyles = cva({
  base: {
    bg: 'gray.50',
    rounded: 'lg',
    p: '4',
    boxShadow: 'lg',
    h: '20',
    display: 'flex',
    align: 'center',
  },
  variants: {
    size: {
      sm: { flex: 1 },
      lg: { flex: 2 },
    },
  },
})
