import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Tooltip from '@radix-ui/react-tooltip'
import { slideAnimation } from '../../../panda/utils'

export const Content = styled(
  Tooltip.Content,
  cva({
    base: {
      rounded: 'md',
      px: '4',
      py: '2',
      fontSize: 'sm',
      color: 'purple.500',
      bg: 'gray.50',
      boxShadow: 'sm',
      userSelect: 'none',
      ...slideAnimation,
    },
  }),
)

export const Arrow = styled(
  Tooltip.Arrow,
  cva({
    base: {
      fill: 'gray.50',
    },
  }),
)
