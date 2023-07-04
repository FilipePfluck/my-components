import React, { useEffect } from 'react'

import { css } from '../styled-system/css'
import '../src/app/globals.css'

import type { Preview } from "@storybook/react";

const WithMouseDetection = (StoryFn) => {
  useEffect(() => {
    document.body.classList.add('using-mouse');
    document.body.addEventListener('mousedown', function () {
      document.body.classList.add('using-mouse');
    });

    const keys = [
      'Tab', 
      'ArrowDown', 
      'ArrowUp', 
      'ArrowLeft', 
      'ArrowRight', 
      'Space', 
      'Enter', 
      'Escape'
    ]

    const onKeyDown = (e: KeyboardEvent) => {
      if (keys.includes(e.key)) {
        document.body.classList.remove('using-mouse');
      }
    };

    // Re-enable focus styling when a key is pressed
    document.body.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
      document.body.removeEventListener('mousedown', function () {
        document.body.classList.add('using-mouse');
      })
    };
  }, []);

  return (
    <StoryFn/>
  )
}

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
  decorators: [withBackground, WithMouseDetection]
};

export default preview;