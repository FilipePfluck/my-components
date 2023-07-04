import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const VerticalScroll = styled(
  'div',
  cva({
    base: {
      overflowX: 'hidden',
      overflowY: 'auto',

      _scrollbarThumb: {
        cursor: 'pointer',
        transition: '0.2s',
        bg: 'gray.300',
        rounded: 'full',
        border: '4px solid rgba(0,0,0,0)',
        backgroundClip: 'padding-box',
      },

      _scrollbarTrack: {
        bg: 'transparent',
      },

      '&::-webkit-scrollbar-thumb:hover': {
        bg: 'gray.400',
        border: '4px solid rgba(0,0,0,0)',
        backgroundClip: 'padding-box',
      },

      ring: '2px',
      outlineOffset: '4px',
    },
    variants: {
      size: {
        sm: {
          _scrollbar: {
            w: '12px',
          },
        },
        md: {
          _scrollbar: {
            w: '16px',
          },
        },
        lg: {
          _scrollbar: {
            w: '24px',
          },
        },
      },
      borderSize: {
        sm: {
          _scrollbarThumb: {
            border: '2px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            border: '2px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
        },
        md: {
          _scrollbarThumb: {
            border: '4px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            border: '4px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
        },
        lg: {
          _scrollbarThumb: {
            border: '8px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            border: '8px solid rgba(0,0,0,0)',
            backgroundClip: 'padding-box',
          },
        },
      },
    },
    defaultVariants: {
      size: 'md',
      borderSize: 'md',
    },
  }),
)
