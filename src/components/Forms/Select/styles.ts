import * as Select from '@radix-ui/react-select'

import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const SelectTrigger = styled(
  Select.Trigger,
  cva({
    base: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      rounded: 'md',
      px: '4',
      py: '2',
      fontSize: 'sm',
      h: '10',
      gap: '2',
      transition: 'background 0.2s',
      bg: { base: 'gray.50', _hover: 'gray.100' },
      color: 'gray.800',
      '&[data-placeholder]': { color: 'gray.600' },
      boxShadow: 'md',
      borderWidth: '2px',
      borderColor: { base: 'gray.400', _dataOpen: 'purple.400' },
    },
    variants: {
      width: {
        auto: {},
        sm: { w: '24' },
        md: { w: '40' },
        lg: { w: '64' },
        full: { w: 'full' },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
)

export const selectContentClassname = cva({
  base: {
    position: 'relative',
    overflow: 'hidden',
    bg: 'gray.50',
    rounded: 'md',
    boxShadow: 'md',
    py: '6',
    w: 'var(--radix-select-trigger-width)',
    h: 'calc(var(--radix-select-content-available-height) + 48px)',
    // 256px (viewport max height) + 48px (content py)
    maxH: '304px',
    scrollBehavior: 'smooth',

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
})

export const SelectContent = styled(Select.Content, selectContentClassname)

export const SelectViewport = styled(
  Select.Viewport,
  cva({
    base: {
      px: '1',
      h: 'var(--radix-select-content-available-height)',
      maxH: '64',
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
      transition: '0.125s',
      cursor: 'pointer',

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
      height: '6',
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
      m: '3',
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

const baseScrollButtonStyle = {
  height: '6',
  backgroundColor: 'gray.50',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'purple.700',
  cursor: 'default',
}

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  cva({
    base: {
      ...baseScrollButtonStyle,
      position: 'absolute',
      top: '0px',
      left: '0px',
      right: '0px',
    },
  }),
)

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  cva({
    base: {
      ...baseScrollButtonStyle,
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  }),
)

export const RightSlot = styled('div', {
  base: {
    ml: 'auto',
    pl: '5',
    color: 'gray.700',
    fontSize: 'xs',
  },
})
