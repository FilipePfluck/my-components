import { defineRecipe } from '@pandacss/dev'

export const errorMessageContainerRecipe = defineRecipe({
  name: 'errorMessageContainer',
  base: {
    fontSize: '14px',
    color: 'red.400',
  },
})
