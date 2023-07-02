import { defineRecipe } from '@pandacss/dev'

export const checkboxRootRecipe = defineRecipe({
  name: 'checkboxRoot',
  base: {
    bg: 'gray.200',
    h: '24px',
    w: '24px',
    rounded: 'md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'sm',
    borderWidth: '2px',
    borderColor: 'gray.400',
    borderStyle: 'solid',

    ring: '2px',

    _checked: {
      borderColor: 'purple.500',
    },
  },
})

export const checkboxIndicatorRecipe = defineRecipe({
  name: 'checkboxIndicator',
  base: {
    h: '16px',
    w: '16px',
    rounded: 'sm',
    bg: 'purple.500',
  },
})

export const checkboxLabelRecipe = defineRecipe({
  name: 'checkboxLabel',
  base: {
    color: 'gray.700',
    fontSize: '14px',
  },
})

export const checkboxContainerRecipe = defineRecipe({
  name: 'checkboxContainer',
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
  },
})
