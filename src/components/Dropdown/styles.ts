import * as Dropdown from '@radix-ui/react-dropdown-menu'

import { styled } from '@/styled-system/jsx'
import { css, cva } from '@/styled-system/css'
import {
  menuContentBaseStyles,
  menuItemBaseStyles,
  slideAnimation,
} from '../../../panda/utils'

const contentStyles = cva({
  base: {
    px: '1',
    py: '2',
    ...menuContentBaseStyles,
    ...slideAnimation,
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
        '& .dropdownItem': {
          pl: '6',
        },
      },
    },
  },
  defaultVariants: {
    width: 'auto',
    itemPaddingLeft: 'none',
  },
})

export const Content = styled(Dropdown.Content, contentStyles)
export const SubContent = styled(Dropdown.SubContent, contentStyles)

export const Arrow = styled(
  Dropdown.Arrow,
  cva({
    base: {
      fill: 'gray.50',
    },
  }),
)

const itemBaseStyles = css.raw({
  all: 'unset',
  px: '1',
  ...menuItemBaseStyles,
})

export const Item = styled(
  Dropdown.Item,
  cva({
    base: itemBaseStyles,
  }),
)
export const RadioItem = styled(
  Dropdown.RadioItem,
  cva({
    base: itemBaseStyles,
  }),
)
export const CheckboxItem = styled(
  Dropdown.CheckboxItem,
  cva({
    base: itemBaseStyles,
  }),
)

export const SubTrigger = styled(
  Dropdown.SubTrigger,
  cva({
    base: {
      ...itemBaseStyles,
      // when the submenu is opened,
      // but the trigger is not highlighted
      _dataOpen: {
        '&:not([data-highlighted])': {
          bg: 'purple.100',
          color: 'purple.600',
        },
      },
    },
  }),
)

export const Label = styled(
  Dropdown.Label,
  cva({
    base: {
      pl: '6',
      fontSize: 'xs',
      lineHeight: '200%',
      color: 'gray.800',
    },
  }),
)

export const Separator = styled(
  Dropdown.Separator,
  cva({
    base: {
      h: '1px',
      m: '1',
      bg: 'purple.200',
    },
  }),
)

export const ItemCheckedIndicator = styled(
  Dropdown.ItemIndicator,
  cva({
    base: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      left: '0px',
      w: '6',
    },
  }),
)

export const RightSlot = styled(
  'div',
  cva({
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
  }),
)
