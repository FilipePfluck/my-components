import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  button: {
    cursor: 'pointer',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'blue.500',
    },
  },
})
