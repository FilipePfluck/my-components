import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import * as Slider from '@radix-ui/react-slider'

export const Root = styled(
  Slider.Root,
  cva({
    base: {
      position: 'relative',
      display: 'flex',
      align: 'center',
      userSelect: 'none',
      touchAction: 'none',
      width: '60',
      height: '5',
    },
  }),
)

export const Track = styled(
  Slider.Track,
  cva({
    base: {
      bg: 'gray.400',
      position: 'relative',
      display: 'flex',
      flexGrow: '1',
      rounded: 'full',
      height: '1',
    },
  }),
)

export const Range = styled(
  Slider.Range,
  cva({
    base: {
      position: 'absolute',
      bg: 'purple.500',
      rounded: 'full',
      height: 'full',
    },
  }),
)

export const Thumb = styled(
  Slider.Thumb,
  cva({
    base: {
      display: 'block',
      width: '5',
      height: '5',
      transition: 'background 0.2s',
      cursor: 'pointer',
      bg: { base: 'purple.500', _hover: 'purple.600' },
      boxShadow: 'sm',
      rounded: 'full',
      ring: '2px',
    },
  }),
)
