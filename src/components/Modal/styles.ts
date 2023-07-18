import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

export const Overlay = styled(
  Dialog.Overlay,
  cva({
    base: {
      bg: 'rgb(0, 0, 0, 0.25)',
      position: 'fixed',
      inset: '0px',
      _dataOpen: {
        animation: 'fadeIn',
      },
      _dataClosed: {
        animation: 'fadeOut',
      },
    },
  }),
)

export const centerStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
} as const

export const dialogContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4',

  bg: 'gray.200',
  rounded: 'lg',
  boxShadow: 'md',
  p: '6',

  w: '90vw',
  maxW: '450px',
  maxH: '85vh',

  _focus: {
    outline: 'none',
  },

  "&[data-state='open']": {
    animation: 'openModal',
  },
  "&[data-state='closed']": {
    animation: 'closeModal',
  },
} as const

export const Content = styled(
  Dialog.Content,
  cva({
    base: {
      ...centerStyles,
      ...dialogContentStyles,
    },
  }),
)

export const AnimatedDialogContent = styled(
  Dialog.Content,
  cva({
    base: {
      ...centerStyles,
      minW: 'max-content',
    },
  }),
)

export const Title = styled(
  Dialog.Title,
  cva({
    base: {
      fontWeight: 500,
      color: 'gray.900',
      fontSize: 'lg',
    },
  }),
)

export const Description = styled(
  Dialog.Description,
  cva({
    base: {
      color: 'gray.800',
    },
  }),
)

export const Header = styled(
  'header',
  cva({
    base: {
      w: 'full',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
  }),
)

export const CloseButton = styled(
  Dialog.Close,
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
