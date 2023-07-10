import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const FormControlContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '2',
      maxW: 'full',
    },
    variants: {
      direction: {
        row: {
          flexDirection: 'row',
        },
        column: {
          flexDirection: 'column',
        },
      },
    },
    defaultVariants: {
      direction: 'column',
    },
  }),
)

export const FormControlMessageContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
    },
    variants: {
      height: {
        auto: {},
        fixed: {
          minH: '6',
        },
      },
    },
    defaultVariants: {
      height: 'fixed',
    },
  }),
)
