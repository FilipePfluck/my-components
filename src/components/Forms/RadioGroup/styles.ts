import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Root = styled(
  RadioGroup.Root,
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
)

export const RadioItem = styled(
  RadioGroup.Item,
  cva({
    base: {
      display: 'flex',
      center: 'flex',
      bg: { base: 'gray.50', _hover: 'purple.50' },
      w: '6',
      h: '6',
      rounded: 'full',
      boxShadow: 'sm',
      ring: '2px',
    },
  }),
)

export const RadioIndicator = styled(
  RadioGroup.Indicator,
  cva({
    base: {
      h: '3',
      w: '3',
      rounded: 'full',
      bg: 'purple.500',
      animation: 'check',
      animationDuration: '0.1s',
    },
  }),
)

export const Label = styled(
  'label',
  cva({
    base: {
      color: 'gray.700',
      fontSize: '14px',
    },
  }),
)
