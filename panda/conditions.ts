export const conditions = {
  extend: {
    focusVisibleWithin: '&:has(:focus-visible)',

    dataOpen: '&[data-state="open"]',
    dataClosed: '&[data-state="closed"]',
    dataDisabled: '&[data-disabled]',
    dataHighlighted: '&[data-highlighted]',

    top: '&[data-side="top"]',
    right: '&[data-side="right"]',
    bottom: '&[data-side="bottom"]',
    left: '&[data-side="left"]',

    ariaInvalid: '&[aria-invalid]',
  },
}
