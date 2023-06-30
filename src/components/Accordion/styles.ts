import { defineRecipe } from '@pandacss/dev'

export const accordionRootRecipe = defineRecipe({
  name: 'accordionRoot',
  base: {
    rounded: 'md',
    width: '80',
    bg: 'gray.400',
    boxShadow: 'lg',
  },
})

export const accordionItemRecipe = defineRecipe({
  name: 'accordionItem',
  base: {
    overflow: 'hidden',
    mt: '1px',
    _first: {
      roundedTop: 'md',
      mt: '0px',
    },
    _last: {
      roundedBottom: 'md',
    },
    _focusVisibleWithin: {
      zIndex: '2',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'blue.500',
    },
  },
})

export const accordionHeaderRecipe = defineRecipe({
  name: 'accordionHeader',
  base: {
    all: 'unset',
    display: 'flex',
  },
})

export const accordionTriggerRecipe = defineRecipe({
  name: 'accordionTrigger',
  base: {
    all: 'unset',
    cursor: 'pointer',
    fontFamily: 'inherit',
    bg: 'gray.50',
    px: '4',
    h: '12',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'gray.900',
    fontWeight: '500',
    boxShadow: 'sm',
  },
})

export const accordionContentRecipe = defineRecipe({
  name: 'accordionContent',
  base: {
    color: 'gray.800',
    backgroundColor: 'gray.100',
    overflow: 'hidden',

    '> div': {
      p: '4',
    },

    _dataOpen: {
      animation: 'accordionSlideDown',
    },

    _dataClosed: {
      animation: 'accordionSlideUp',
    },
  },
})
