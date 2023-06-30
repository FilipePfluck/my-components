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
}

export const DropdownRadioItem = ({
  itemLabel,
  rightSlot,
  ...props
}: DropdownItemProps) => {
  return (
    <RadioItem onSelect={(e) => e.preventDefault()} {...props}>
      <DropdownItemCheckedIndicator>•</DropdownItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <DropdownRightSlot>{rightSlot}</DropdownRightSlot>}
    </RadioItem>
  )
}
