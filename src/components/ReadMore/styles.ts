import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const textStyles = cva({
  base: {
    fontSize: 'lg',
    color: 'gray.800',
  },
  variants: {
    isVisible: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    isVisible: true,
  },
})

export const BeginText = styled('p', textStyles)
export const EndText = styled('span', textStyles)

export const ReadMoreButton = styled(
  'span',
  cva({
    base: {
      all: 'unset',
      cursor: 'pointer',
      color: 'purple.700',
      fontSize: 'lg',
      px: '1',
      ring: '2px',
    },
  }),
)
