import { defineRecipe } from '@pandacss/dev'

export const dropdownContentRecipe = defineRecipe({
  name: 'dropdownContent',
  base: {
    bg: 'gray.50',
    rounded: 'md',
    p: '2',
    boxShadow: 'lg',
    _dataOpen: {
      _top: { animation: 'slideDownAndFadeIn' },
      _right: { animation: 'slideLeftAndFadeIn' },
      _bottom: { animation: 'slideUpAndFadeIn' },
      _left: { animation: 'slideRightAndFadeIn' },
    },
    _dataClosed: {
      _top: { animation: 'slideDownAndFadeOut' },
      _right: { animation: 'slideLeftAndFadeOut' },
      _bottom: { animation: 'slideUpAndFadeOut' },
      _left: { animation: 'slideRightAndFadeOut' },
    },
  },
  variants: {
    width: {
      auto: {},
      sm: { minW: '32' },
      md: { minW: '48' },
      lg: { minW: '64' },
    },
    itemPaddingLeft: {
      none: {},
      md: {
        '.dropdownItem': {
          pl: '6',
        },
      },
    },
  },
  defaultVariants: {
    width: 'auto',
    itemPaddingLeft: 'none',
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
    fontSize: 'xs',
    lineHeight: '100%',
    color: 'purple.600',
    rounded: 'sm',
    display: 'flex',
    alignItems: 'center',
    height: '6',
    px: '1',
    position: 'relative',
    transition: '0.125s',

    _dataDisabled: {
      color: 'gray.500',
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
          '&:not([data-highlighted])': {
            bg: 'purple.100',
            color: 'purple.600',
          },
        },
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
  jsx: [
    'DropdownItem',
    'DropdownRadioItem',
    'DropdownCheckboxItem',
    'DropdownSubTrigger',
  ],
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
    bg: 'purple.200',
  },
})

export const dropdownItemCheckedIndicatorRecipe = defineRecipe({
  name: 'dropdownItemCheckedIndicator',
  base: {
    position: 'absolute!',
    left: '0px!',
  },
  jsx: [
    'DropdownItemCheckedIndicator',
    'DropdownRadioItem',
    'DropdownCheckboxItem',
  ],
})

export const dropdownRightSlotRecipe = defineRecipe({
  name: 'dropdownRightSlot',
  base: {
    ml: 'auto',
    pl: '5',
    color: 'gray.700',
    fontSize: 'xs',

    '[data-highlighted] &': {
      color: 'gray.50',
    },

    '[data-disabled] &': { color: 'gray.500' },
  },
})
