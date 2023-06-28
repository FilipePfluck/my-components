import { DropdownMenuRadioItemProps } from '@radix-ui/react-dropdown-menu'

import {
  DropdownRadioItem as RadioItem,
  DropdownRightSlot,
  DropdownItemCheckedIndicator,
} from './parts'

export interface DropdownItemProps extends DropdownMenuRadioItemProps {
  itemLabel: string
  rightSlot?: string

  type?: 'default' | 'submenu'
  paddingLeft?: 'none' | 'md'
  alignment?: 'center' | 'left'
}

export const DropdownRadioItem = ({
  itemLabel,
  rightSlot,
  ...props
}: DropdownItemProps) => {
  return (
    <RadioItem {...props}>
      <DropdownItemCheckedIndicator>•</DropdownItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <DropdownRightSlot>{rightSlot}</DropdownRightSlot>}
    </RadioItem>
  )
}
