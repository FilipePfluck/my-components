import * as RadixPopover from '@radix-ui/react-popover'
import * as S from './styles'
import { FiX } from 'react-icons/fi'

export const PopoverRoot = RadixPopover.Root
export const PopoverTrigger = RadixPopover.Trigger

interface PopoverProps extends RadixPopover.PopoverContentProps {
  width?: 'sm' | 'md' | 'lg' | 'full' | 'auto'
}

export const Popover = ({
  children,
  sideOffset = 16,
  width,
  ...props
}: PopoverProps) => {
  return (
    <RadixPopover.Portal>
      <S.Content width={width} sideOffset={sideOffset} {...props}>
        {children}
        <S.CloseButton aria-label="close">
          <FiX />
        </S.CloseButton>
        <S.Arrow />
      </S.Content>
    </RadixPopover.Portal>
  )
}
