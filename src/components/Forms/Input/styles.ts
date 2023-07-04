import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const InputContainer = styled(
  'label',
  cva({
    base: {
      px: '4',
      rounded: 'md',
      bg: 'gray.50',
      boxShadow: 'md',
      transition: '0.2s',

      display: 'flex',
      alignItems: 'center',
      gap: '2',

      borderWidth: '2px',
      borderColor: {
        base: 'gray.400',
        _focusWithin: 'purple.400',
        // @ts-ignore
        '&:has([aria-invalid])': 'red.400',
      },
      '&:has(:disabled)': {
        bg: 'gray.100',
        cursor: 'not-allowed',
      },
    },
  }),
)

export const Input = styled(
  'input',
  cva({
    base: {
      py: '2',
      bg: 'transparent',
      color: 'gray.800',
      fontSize: 'sm',
      outline: 'none',
      _placeholder: {
        color: {
          base: 'gray.600',
          _disabled: 'gray.400',
        },
        fontSize: 'sm',
      },
      _autofill: {
        boxShadow: '0 0 0px 1000px rgba(0,0,0,0) inset',
      },
    },
  }),
)

export const InputIcon = styled(
  'div',
  cva({
    base: {
      fontSize: 'md',
      transition: '0.2s',
      color: {
        base: 'purple.300',
        // @ts-ignore
        '.group:has(:disabled) &': 'gray.400',
        '.group:has([aria-invalid]) &': 'red.400',
        '.group:has(:focus-within) &': 'purple.400',
      },
    },
  }),
)

export const InputIconButton = styled(
  'button',
  cva({
    base: {
      bg: 'transparent',
      p: '1',
      rounded: 'full',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'purple.300',
      '.group:has(:disabled) &': {
        color: 'gray.400',
      },
    },
  }),
)
