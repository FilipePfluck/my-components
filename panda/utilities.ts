export const utilities = {
  extend: {
    focusRing: {
      values: ['1px', '2px', '4px'],
      shorthand: 'ring',
      transform(value: string) {
        return {
          '&:focus-visible': {
            outlineWidth: value,
            outlineStyle: 'solid',
            outlineColor: 'token(colors.blue.500)',
          },
        }
      },
    },
  },
}
