export const utilities = {
  extend: {
    focusRing: {
      values: ['1px', '2px', '4px'],
      shorthand: 'ring',
      transform(value: string) {
        return {
          _focusVisible: {
            outlineWidth: value,
            outlineStyle: 'solid',
            outlineColor: 'blue.500',
            outlineOffset: value,
          },
        }
      },
    },
  },
}
