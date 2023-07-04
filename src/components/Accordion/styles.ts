import * as Accordion from '@radix-ui/react-accordion'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Root = styled(
  Accordion.Root,
  cva({
    base: {
      rounded: 'md',
      width: '80',
      bg: 'gray.400',
      boxShadow: 'lg',
    },
  }),
)

export const Item = styled(
  Accordion.Item,
  cva({
    base: {
      overflow: 'hidden',
      mt: '1px',
      _first: {
        roundedTop: 'md',
        mt: '0px',
      },
      _last: {
        roundedBottom: 'md',
      },
      _focusVisibleWithin: {
        zIndex: '2',
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'blue.500',
      },
    },
  }),
)

export const Header = styled(
  Accordion.Header,
  cva({
    base: {
      all: 'unset',
      display: 'flex',
    },
  }),
)

export const Trigger = styled(
  Accordion.Trigger,
  cva({
    base: {
      all: 'unset',
      cursor: 'pointer',
      fontFamily: 'inherit',
      bg: 'gray.50',
      p: '4',
      w: 'full',
      h: '12',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'gray.900',
      fontWeight: 'bold',
      boxShadow: 'md',
    },
  }),
)

export const Content = styled(
  Accordion.Content,
  cva({
    base: {
      color: 'gray.800',
      backgroundColor: 'gray.100',
      overflow: 'hidden',

      '&> div': {
        p: '4',
      },

      _dataOpen: {
        animation: 'accordionSlideDown',
      },

      _dataClosed: {
        animation: 'accordionSlideUp',
      },
    },
  }),
)
