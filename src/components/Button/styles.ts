import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const ButtonContainer = styled(
  'button',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'md',
      borderWidth: '1px',
      borderStyle: 'solid',
      transition: 'background 0.2s',
      cursor: 'pointer',
    },
    variants: {
      intent: {
        primary: {
          bg: {
            base: 'purple.600',
            _hover: 'purple.700',
          },
          borderColor: {
            base: 'purple.600',
            _hover: 'puprle.700',
          },
          color: 'gray.100',
        },
        secondary: {
          bg: {
            base: 'transparent',
            _hover: 'purple.600',
          },
          borderColor: 'purple.600',
          color: {
            base: 'purple.600',
            _hover: 'gray.100',
          },
        },
      },

      size: {
        sm: {
          p: '2',
          gap: '2',
          fontSize: 'sm',
        },
        md: {
          p: '3',
          gap: '3',
          fontSize: 'md',
        },
        lg: {
          p: '4',
          gap: '4',
          fontSize: 'lg',
        },
      },

      full: {
        true: {
          w: 'full',
        },
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }),
)
