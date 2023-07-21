import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Root = styled(
  Checkbox.Root,
  cva({
    base: {
      bg: 'gray.200',
      h: '24px',
      w: '24px',
      rounded: 'md',
      display: 'flex',
      center: 'flex',
      boxShadow: 'sm',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'gray.400',
      transition: '0.2s border-color',
      ring: '2px',

      '&[aria-checked="true"]': {
        borderColor: 'purple.500',
      },
    },
  }),
)

export const Indicator = styled(
  Checkbox.Indicator,
  cva({
    base: {
      h: '16px',
      w: '16px',
      rounded: 'sm',
      bg: 'purple.500',
      transition: '0.2s',

      animation: 'check',
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

export const Container = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
  }),
)
