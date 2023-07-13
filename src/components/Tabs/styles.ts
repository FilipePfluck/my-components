import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export const Root = styled(
  Tabs.Root,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      // width: '80',
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
      minW: 'max-content',
      w: 'full',
      p: '4',
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
    variants: {
      animated: {
        true: {
          position: 'absolute',
          top: '48px',
          height: '240px',
          w: 'full',
        },
      },
    },
  }),
)

export const Text = styled(
  motion.p,
  cva({
    base: {
      fontSize: '128px',
      textAlign: 'center',
      position: 'absolute',
      // removing the parents padding
      w: 'calc(100% - 40px)',
      zIndex: '5',
      userSelect: 'none',
    },
  }),
)

export const SelectedIndicator = styled(
  motion.div,
  cva({
    base: {
      position: 'absolute',
      bottom: '0',
      height: '2px',
      w: 'full',
      bg: 'purple.500',
    },
  }),
)
