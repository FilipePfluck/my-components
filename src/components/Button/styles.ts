import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  name: 'button',
  description: 'The styles for the Button component',

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
          base: 'purple.500',
          _hover: 'purple.700',
        },
        borderColor: {
          base: 'purple.500',
          _hover: 'puprle.600',
        },
        color: 'gray.100',
      },
      secondary: {
        bg: {
          base: 'transparent',
          _hover: 'purple.500',
        },
        borderColor: 'purple.500',
        color: {
          base: 'purple.500',
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
  },
})
