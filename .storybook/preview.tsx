import React from 'react'

import { css } from '../styled-system/css'
import '../src/app/globals.css'

import type { Preview } from "@storybook/react";

const withBackground = (StoryFn) => {
  return (
    <div className={css({
      position: 'fixed',
      inset: '0px',
      bg: 'gray.200',
      p: '4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    })}>
       <StoryFn/>
    </div>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withBackground]
};

export default preview;