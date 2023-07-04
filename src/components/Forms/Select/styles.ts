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
    position: 'relative',
    overflow: 'hidden',
    bg: 'gray.50',
    rounded: 'md',
    boxShadow: 'md',
    py: '2',
    w: '32',
    h: 'var(--radix-select-content-available-height)',
    maxH: '64',
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
      transition: '0.125s',

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

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  cva({
    base: {
      height: '4',
      backgroundColor: 'gray.50',
      cursor: 'default',
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
      height: '4',
      backgroundColor: 'gray.50',
      cursor: 'default',
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  }),
)
