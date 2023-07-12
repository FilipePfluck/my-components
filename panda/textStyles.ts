import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  title: {
    value: {
      fontWeight: '700',
      fontSize: '4xl',
      lineHeight: 1,
      letterSpacing: '-1px',
    },
  },
  subtitle: {
    value: {
      fontWeight: '500',
      fontSize: '2xl',
      lineHeight: 1,
      letterSpacing: '0',
    },
  },
  bodyLg: {
    value: {
      fontWeight: '400',
      fontSize: 'lg',
      lineHeight: 1.3,
      letterSpacing: '0',
    },
  },
  bodyMd: {
    value: {
      fontWeight: '400',
      fontSize: 'md',
      lineHeight: 1.3,
      letterSpacing: '0',
    },
  },
  bodySm: {
    value: {
      fontWeight: '400',
      fontSize: 'sm',
      lineHeight: 1.3,
      letterSpacing: '0',
    },
  },
})
