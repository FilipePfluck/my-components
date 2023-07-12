import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Tabs from '@radix-ui/react-tabs'

export const Root = styled(
  Tabs.Root,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      width: '80',
      boxShadow: 'md',
      rounded: 'lg',
      position: 'relative',
    },
  }),
)

export const List = styled(
  Tabs.List,
  cva({
    base: {
      display: 'flex',
      flexShrink: '0',
      borderBottom: '1px solid token(colors.gray.400)',
    },
  }),
)

export const Trigger = styled(
  Tabs.Trigger,
  cva({
    base: {
      bg: 'gray.50',
      py: '5',
      h: '12',
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'gray.800',
      userSelect: 'none',
      position: 'relative',
      _focus: {
        zIndex: '5',
      },
      _firstOfType: {
        borderTopLeftRadius: 'lg',
      },
      _lastOfType: {
        borderTopRightRadius: 'lg',
      },
      '&[data-state="active"]': {
        color: 'purple.500',
      },
      ring: '2px',
    },
    variants: {
      activeIndicator: {
        boxShadow: {
          '&[data-state="active"]': {
            boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
          },
        },
        none: {},
      },
    },
    defaultVariants: {
      activeIndicator: 'boxShadow',
    },
  }),
)

export const Content = styled(
  Tabs.Content,
  cva({
    base: {
      flexDirection: 'column',
      flexGrow: '1',
      p: '5',
      bg: 'gray.50',
      borderBottomRadius: 'lg',
      ring: '2px',
    },
  }),
)
