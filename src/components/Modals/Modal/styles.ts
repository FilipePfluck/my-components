import { defineRecipe } from '@pandacss/dev'

export const dialogOverlayRecipe = defineRecipe({
  name: 'dialogOverlay',
  base: {
    bg: 'rgb(0, 0, 0, 0.25)',
    position: 'fixed',
    inset: '0px',
    "&[data-state='open']": {
      animation: 'fadeIn',
    },
    "&[data-state='closed']": {
      animation: 'fadeOut',
    },
  },
})

export const dialogContentRecipe = defineRecipe({
  name: 'dialogContent',
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4',

    bg: 'gray.200',
    rounded: 'lg',
    boxShadow: 'md',
    p: '6',

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    w: '90vw',
    maxW: '450px',
    maxH: '85vh',

    _focus: {
      outline: 'none',
    },

    "&[data-state='open']": {
      animation: 'openModal',
    },
    "&[data-state='closed']": {
      animation: 'closeModal',
    },
  },
})

export const dialogTitleRecipe = defineRecipe({
  name: 'dialogTitle',
  base: {
    fontWeight: 500,
    color: 'gray.900',
    fontSize: 'lg',
  },
})

export const dialogDescriptionRecipe = defineRecipe({
  name: 'dialogDescription',
  base: {
    color: 'gray.800',
  },
})

export const dialogHeaderRecipe = defineRecipe({
  name: 'dialogHeader',
  base: {
    w: 'full',
    display: 'flex',
    flexDirection: 'column',
    gap: '2',
  },
})

export const dialogCloseRecipe = defineRecipe({
  name: 'dialogClose',
  base: {
    position: 'absolute',
    top: '6',
    right: '6',
    h: '6',
    w: '6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple.500',
  },
})
