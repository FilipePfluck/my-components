import { defineRecipe } from '@pandacss/dev'

export const formControlContainerRecipe = defineRecipe({
  name: 'formControlContainer',
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
  },
})

export const formControlMessageContainerRecipe = defineRecipe({
  name: 'formControlMessageContainer',
  base: {
    display: 'flex',
    minH: '6',
  },
})
