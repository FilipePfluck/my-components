import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Container = styled(
  'button',
  cva({
    base: {
      fontFamily: 'inherit',
      borderRadius: '100%',
      height: '8',
      width: '8',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'purple.500',
      backgroundColor: 'gray.50',
    },
  }),
)
