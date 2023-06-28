import { defineRecipe } from '@pandacss/dev'

export const dropdownContentRecipe = defineRecipe({
  name: 'dropdownContent',
  base: {
    bg: 'gray.100',
    rounded: 'md',
    p: '2',
    boxShadow: 'lg',
    _dataOpen: {
      _top: { animation: 'slideDownAndFade' },
      _right: { animation: 'slideLeftAndFade' },
      _bottom: { animation: 'slideUpAndFade' },
      _left: { animation: 'slideRightAndFade' },
    },
  },
  variants: {
    width: {
      auto: {},
      sm: { minW: '32' },
      md: { minW: '48' },
      lg: { minW: '64' },
    },
  },
  defaultVariants: {
    width: 'auto',
  },
  jsx: ['DropdownContent', 'DropdownSubContent'],
})

export const dropdownArrowRecipe = defineRecipe({
  name: 'dropdownArrow',
  base: {
    fill: 'white',
  },
})

export const dropdownItemRecipe = defineRecipe({
  name: 'dropdownItem',
  base: {
    all: 'unset',
    cursor: 'pointer',
    fontSize: 'sm',
    lineHeight: '100%',
    color: 'purple.600',
    rounded: 'sm',
    display: 'flex',
    alignItems: 'center',
    height: '6',
    px: '1',
    position: 'relative',

    _dataDisabled: {
      color: 'gray.600',
      pointerEvents: 'none',
    },

    _dataHighlighted: {
      bg: 'purple.400',
      color: 'gray.50',
    },
  },
  variants: {
    type: {
      default: {},
      submenu: {
        _dataOpen: {
          bg: 'purple.100',
          color: 'purple.600',
        },
      },
    },
    paddingLeft: {
      none: {},
      md: { pl: '6' },
    },
  },
  defaultVariants: {
    type: 'default',
  },
  jsx: ['DropdownItem', 'DropdownRadioItem', 'DropdownCheckboxItem'],
})

export const dropdownLabelRecipe = defineRecipe({
  name: 'dropdownLabel',
  base: {
    pl: '6',
    fontSize: 'xs',
    lineHeight: '200%',
    color: 'gray.800',
  },
})

export const dropdownSeparatorRecipe = defineRecipe({
  name: 'dropdownSeparator',
  base: {
    h: '1px',
    m: '1',
    bg: 'purple.400',
  },
})

export const dropdownItemCheckedIndicatorRecipe = defineRecipe({
  name: 'dropdownItemCheckedIndicator',
  description:
    'The indicator shown next to the item, indicating that it is currently selected',
  base: {
    position: 'absolute',
    left: '0',
    width: '6',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const dropdownRightSlotRecipe = defineRecipe({
  name: 'dropdownRightSlot',
  base: {
    ml: 'auto',
    pl: '5',
    color: 'gray.800',

    '[data-highlighted] > &': {
      color: 'gray.50',
    },

    '[data-disabled] &': { color: 'gray.600' },
  },
})
