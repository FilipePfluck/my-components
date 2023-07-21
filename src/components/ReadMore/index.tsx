import { useState } from 'react'

import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ReadMoreProps extends HTMLStyledProps<'p'> {
  id: string
  text: string
  amountOfWords?: number
  readMoreButtonAriaLabel?: {
    expanded: string
    collapsed: string
  }
}

export const ReadMore = ({
  id,
  text,
  amountOfWords = 48,
  readMoreButtonAriaLabel = {
    collapsed: 'Expand the text',
    expanded: 'Collapse the text',
  },
  ...props
}: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const splittedText = text.split(' ')
  const itCanOverflow = splittedText.length > amountOfWords
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text
  const endText = splittedText.slice(amountOfWords - 1).join(' ')

  const { collapsed, expanded } = readMoreButtonAriaLabel

  return (
    <S.BeginText id={id} {...props}>
      {beginText}
      {itCanOverflow && (
        <>
          {!isExpanded && <span>... </span>}
          <S.EndText isVisible={isExpanded} aria-hidden={!isExpanded}>
            {' '}
            {endText}
          </S.EndText>
          <S.ReadMoreButton
            role="button"
            tabIndex={0}
            onClick={() => setIsExpanded(!isExpanded)}
            onKeyDown={(e) => {
              if (e.code === 'Space' || e.code === 'Enter') {
                setIsExpanded(!isExpanded)
              }
            }}
            aria-expanded={isExpanded}
            aria-controls={id}
            aria-label={isExpanded ? expanded : collapsed}
          >
            {isExpanded ? 'show less' : 'show more'}
          </S.ReadMoreButton>
        </>
      )}
    </S.BeginText>
  )
}
