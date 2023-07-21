import { css } from '@/styled-system/css'

export const slideAnimation = css.raw({
  _dataOpen: {
    _top: { animation: 'slideDownAndFadeIn' },
    _right: { animation: 'slideLeftAndFadeIn' },
    _bottom: { animation: 'slideUpAndFadeIn' },
    _left: { animation: 'slideRightAndFadeIn' },
  },
  _dataClosed: {
    _top: { animation: 'slideDownAndFadeOut' },
    _right: { animation: 'slideLeftAndFadeOut' },
    _bottom: { animation: 'slideUpAndFadeOut' },
    _left: { animation: 'slideRightAndFadeOut' },
  },
})

export const menuItemBaseStyles = css.raw({
  fontSize: 'xs',
  color: 'purple.600',
  lineHeight: '100%',

  position: 'relative',
  display: 'flex',
  align: 'center',
  rounded: 'sm',
  h: '6',

  userSelect: 'none',
  transition: '0.125s',
  cursor: 'pointer',

  _dataDisabled: {
    color: 'purple.400',
    pointerEvents: 'none',
  },

  _dataHighlighted: {
    outline: 'none',
    bg: 'purple.400',
    color: 'gray.50',
  },
})

export const menuContentBaseStyles = css.raw({
  bg: 'gray.50',
  rounded: 'md',
  boxShadow: 'lg',
})
