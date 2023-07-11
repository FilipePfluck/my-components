import * as RadixHoverCard from '@radix-ui/react-hover-card'

import * as S from './styles'

export const HoverCard = ({
  children,
  sideOffset = 8,
  ...props
}: RadixHoverCard.HoverCardContentProps) => {
  return (
    <RadixHoverCard.Portal>
      <S.Content sideOffset={sideOffset} {...props}>
        <S.Arrow />
        {children}
      </S.Content>
    </RadixHoverCard.Portal>
  )
}
