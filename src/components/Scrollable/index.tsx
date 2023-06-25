import { ReactNode } from 'react'
import { verticalScroll } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'

interface ScrollableProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  borderSize?: 'sm' | 'md' | 'lg'
  className?: string
  tabIndex?: number
}

export const Scrollable = ({
  children,
  size,
  borderSize,
  className,
  tabIndex = 0,
}: ScrollableProps) => {
  const scrollableClassname = cx(
    className,
    verticalScroll({ size, borderSize }),
  )
  return (
    <div tabIndex={tabIndex} className={scrollableClassname}>
      {children}
    </div>
  )
}
