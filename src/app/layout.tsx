'use client'

import { ReactNode, useEffect } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { cx } from '@/styled-system/css'
import { verticalScroll } from '@/styled-system/recipes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyClassname = cx(inter.className, verticalScroll())

  useEffect(() => {
    document.body.classList.add('using-mouse')
    document.body.addEventListener('mousedown', function () {
      document.body.classList.add('using-mouse')
    })

    const keys = [
      'Tab',
      'ArrowDown',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight',
      'Space',
      'Enter',
      'Escape',
    ]

    const onKeyDown = (e: KeyboardEvent) => {
      if (keys.includes(e.key)) {
        document.body.classList.remove('using-mouse')
      }
    }

    // Re-enable focus styling when a key is pressed
    document.body.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.removeEventListener('keydown', onKeyDown)
      document.body.removeEventListener('mousedown', function () {
        document.body.classList.add('using-mouse')
      })
    }
  }, [])

  return (
    <html lang="en">
      <body className={bodyClassname}>{children}</body>
    </html>
  )
}
