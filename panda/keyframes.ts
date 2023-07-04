import { CssKeyframes } from '@/styled-system/types/system-types'

export const keyframes: CssKeyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },

  // modal
  openModal: {
    '0%': {
      opacity: '0',
      transform: 'translate(-50%, -48%) scale(.96)',
    },
    '100%': {
      opacity: '1',
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  closeModal: {
    '0%': {
      opacity: '1',
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '100%': {
      opacity: '0',
      transform: 'translate(-50%, -48%) scale(.96)',
    },
  },

  // accordion
  accordionSlideDown: {
    '0%': {
      height: '0px',
      maxHeight: '0px',
    },
    '100%': {
      height: 'var(--radix-accordion-content-height)',
      maxHeight: 'var(--radix-accordion-content-height)',
    },
  },
  accordionSlideUp: {
    '0%': {
      height: 'var(--radix-accordion-content-height)',
      maxHeight: 'var(--radix-accordion-content-height)',
    },
    '100%': {
      height: '0px',
      maxHeight: '0px',
    },
  },

  // slide and fade
  slideUpAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  slideRightAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },
  slideDownAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
  slideLeftAndFadeIn: {
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  },

  slideUpAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateY(0)' },
    '100%': { opacity: 0, transform: 'translateY(2px)' },
  },
  slideRightAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateX(0)' },
    '100%': { opacity: 0, transform: 'translateX(-2px)' },
  },
  slideDownAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateY(0)' },
    '100%': { opacity: 0, transform: 'translateY(-2px)' },
  },
  slideLeftAndFadeOut: {
    '0%': { opacity: 1, transform: 'translateX(0)' },
    '100%': { opacity: 0, transform: 'translateX(2px)' },
  },

  // check and uncheck

  check: {
    '0%': { opacity: 0, transform: 'scale(0%)' },
    '100%': { opacity: 1, transform: 'scale(100%)' },
  },
  unCheck: {
    '0%': { opacity: 1, transform: 'scale(100%)' },
    '100%': { opacity: 0, transform: 'scale(0%)' },
  },
}
