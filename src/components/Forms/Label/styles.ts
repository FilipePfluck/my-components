import { defineRecipe } from '@pandacss/dev'

export const labelContainerRecipe = defineRecipe({
  name: 'labelContainer',
  base: {
    display: 'flex',
    align: 'center',
    gap: '2',
    color: 'gray.700',
    fontSize: '14px',
  },
})

export const labelRequiredIndicatorRecipe = defineRecipe({
  name: 'labelRequiredIndicator',
  base: {
    color: 'red.500',
    fontSize: '12px',
  },
})
