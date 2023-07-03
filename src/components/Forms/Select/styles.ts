import * as Select from '@radix-ui/react-select'

import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const SelectTrigger = styled(
  Select.Trigger,
  cva({
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      rounded: 'md',
      px: '4',
      fontSize: 'sm',
      h: '8',
      w: '32',
      gap: '2',
      transition: 'background 0.2s',
      bg: { base: 'gray.50', _hover: 'gray.100' },
      color: 'purple.700',
      boxShadow: 'md',
    },
  }),
)

export const selectContentClassname = cva({
  base: {
    overflow: 'hidden',
    bg: 'gray.50',
    rounded: 'md',
    boxShadow: 'md',
    w: '32',
  },
})

export const SelectContent = styled(Select.Content, selectContentClassname)

export const SelectViewport = styled(
  Select.Viewport,
  cva({
    base: {
      p: '1',
    },
  }),
)

export const SelectItem = styled(
  Select.Item,
  cva({
    base: {
      fontSize: 'sm',
      color: 'purple.700',
      rounded: 'sm',
      display: 'flex',
      alignItems: 'center',
      height: '6',
      p: '0px 32px 0 24px',
      position: 'relative',
      userSelect: 'none',

      _dataDisabled: {
        color: 'purple.400',
        pointerEvents: 'none',
      },

      _dataHighlighted: {
        outline: 'none',
        bg: 'purple.500',
        color: 'gray.50',
      },
    },
  }),
)

export const SelectLabel = styled(
  Select.Label,
  cva({
    base: {
      px: '6',
      fontSize: 'xs',
      lineHeight: '200%',
      color: 'gray.800',
    },
  }),
)

export const SelectSeparator = styled(
  Select.Separator,
  cva({
    base: {
      h: '1px',
      bg: 'purple.500',
      m: '1',
    },
  }),
)

export const SelectItemIndicator = styled(
  Select.ItemIndicator,
  cva({
    base: {
      position: 'absolute',
      left: '0px',
      width: '6',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
)

const scrollButtonStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '6',
    backgroundColor: 'gray.50',
    color: 'purple.700',
    cursor: 'default',
  },
})

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  scrollButtonStyles,
)

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles,
)
