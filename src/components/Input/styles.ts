import { defineRecipe } from '@pandacss/dev'

export const inputContainerRecipe = defineRecipe({
  name: 'inputContainer',
  base: {
    px: '4',
    rounded: 'md',
    bg: 'gray.50',
    boxShadow: 'md',

    display: 'flex',
    alignItems: 'center',
    gap: '2',

    borderWidth: '2px',
    borderColor: {
      base: 'gray.400',
      _focusWithin: 'purple.400',
      '&:has([aria-invalid])': 'red.400',
    },
    '&:has(:disabled)': {
      bg: 'gray.100',
      curor: 'not-allowed',
    },
  },
})

export const inputRecipe = defineRecipe({
  name: 'inputElement',
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
})

export const inputIconRecipe = defineRecipe({
  name: 'inputIcon',
  base: {
    fontSize: 'md',
    color: 'purple.300',
    '.group:has(:disabled) &': {
      color: 'gray.400',
    },
  },
})

export const inputIconButtonRecipe = defineRecipe({
  name: 'inputIconButton',
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
})
