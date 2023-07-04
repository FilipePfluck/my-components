import { ReactNode } from 'react'
import * as S from './styles'

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
  return (
    <S.VerticalScroll
      size={size}
      borderSize={borderSize}
      tabIndex={tabIndex}
      className={className}
    >
      {children}
    </S.VerticalScroll>
  )
}
