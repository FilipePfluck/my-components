import {
  accordionContentRecipe,
  accordionHeaderRecipe,
  accordionItemRecipe,
  accordionRootRecipe,
  accordionTriggerRecipe,
} from '@/components/Accordion/styles'
import { buttonRecipe } from '@/components/Button/styles'
import {
  dialogCloseRecipe,
  dialogContentRecipe,
  dialogDescriptionRecipe,
  dialogHeaderRecipe,
  dialogOverlayRecipe,
  dialogTitleRecipe,
} from '@/components/Modals/Modal/styles'
import { verticalScrollRecipe } from '@/components/Scrollable/styles'
import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  button: {
    cursor: 'pointer',
    _focusVisible: {
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'blue.500',
    },
  },
})

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],
  jsxFramework: 'react',
  utilities: {
    extend: {
      focusRing: {
        values: ['1px', '2px', '4px'],
        shorthand: 'ring',
        transform(value: string) {
          return {
            _focusVisible: {
              outlineWidth: value,
              outlineStyle: 'solid',
              outlineColor: 'blue.500',
              outlineOffset: value,
            },
          }
        },
      },
    },
  },
  conditions: {
    extend: {
      focusVisibleWithin: '&:has(:focus-visible)',
      dataOpen: '&[data-state="open"]',
      dataClosed: '&[data-state="closed"]',
    },
  },
  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,

        dialogOverlay: dialogOverlayRecipe,
        dialogContent: dialogContentRecipe,
        dialogTitle: dialogTitleRecipe,
        dialogDescription: dialogDescriptionRecipe,
        dialogHeader: dialogHeaderRecipe,
        dialogClose: dialogCloseRecipe,

        verticalScroll: verticalScrollRecipe,

        accordionRoot: accordionRootRecipe,
        accordionItem: accordionItemRecipe,
        accordionHeader: accordionHeaderRecipe,
        accordionTrigger: accordionTriggerRecipe,
        accordionContent: accordionContentRecipe,
      },
      tokens: {
        colors: {
          blackAlpha: { value: 'rgb(0, 0, 0, 0.4)' },
        },
        animations: {
          fadeIn: {
            value: 'fadeIn 150ms',
          },
          fadeOut: {
            value: 'fadeOut 150ms',
          },
          openModal: {
            value: 'openModal 150ms',
          },
          closeModal: {
            value: 'closeModal 150ms',
          },
          accordionSlideDown: {
            value: 'accordionSlideDown 0.2s',
          },
          accordionSlideUp: {
            value: 'accordionSlideUp 0.2s',
          },
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
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
        accordionSlideDown: {
          '0%': {
            height: '0px',
            maxHeight: '0px',
            padding: '0px 16px',
          },
          '100%': {
            height: 'var(--radix-accordion-content-height)',
            maxHeight: 'var(--radix-accordion-content-height)',
            padding: '16px',
          },
        },
        accordionSlideUp: {
          '0%': {
            height: 'var(--radix-accordion-content-height)',
            maxHeight: 'var(--radix-accordion-content-height)',
            padding: '16px',
          },
          '100%': {
            height: '0px',
            maxHeight: '0px',
            padding: '0px 16px',
          },
        },
      },
    },
  },
  globalCss,
  outdir: 'styled-system',
})
