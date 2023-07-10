import * as Popover from '@radix-ui/react-popover'

import { cva } from '@/styled-system/css'
import { slideAnimation } from '../../../panda/utils'
import { styled } from '@/styled-system/jsx'

export const Content = styled(
  Popover.Content,
  cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',

      bg: 'gray.50',
      rounded: 'lg',
      boxShadow: 'md',
      p: '6',
      maxH: '85vh',

      ...slideAnimation,
    },
    variants: {
      width: {
        auto: {},
        sm: { w: '32' },
        md: { w: '64' },
        lg: { w: '80' },
        full: { w: 'full' },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
)

export const Arrow = styled(
  Popover.Arrow,
  cva({
    base: {
      fill: 'gray.50',
    },
  }),
)

export const CloseButton = styled(
  Popover.Close,
  cva({
    base: {
      position: 'absolute',
      top: '6',
      right: '6',
      h: '6',
      w: '6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'purple.500',
      rounded: 'full',
    },
  }),
)

export const Trigger = styled(
  Popover.Trigger,
  cva({
    base: {
      fontFamily: 'inherit',
      borderRadius: '100%',
      height: '35px',
      width: '35px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'purple.500',
      backgroundColor: 'white',
    },
  }),
)
