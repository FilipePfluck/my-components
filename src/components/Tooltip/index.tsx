import * as RadixTooltip from '@radix-ui/react-tooltip'

import * as S from './styles'

interface TooltipProps extends RadixTooltip.TooltipProps {
  message: string
}

export const Tooltip = ({ children, message, ...props }: TooltipProps) => {
  return (
    <RadixTooltip.Root {...props}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <S.Content sideOffset={8}>
          <S.Arrow />
          {message}
        </S.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}
