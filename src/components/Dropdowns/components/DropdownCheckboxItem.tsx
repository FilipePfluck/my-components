import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { MdCheck } from 'react-icons/md'

import {
  DropdownCheckboxItem as CheckboxItem,
  DropdownRightSlot,
  DropdownItemCheckedIndicator,
} from './parts'

export interface DropdownItemProps extends DropdownMenuCheckboxItemProps {
  itemLabel: string
  rightSlot?: string

  type?: 'default' | 'submenu'
}

export const DropdownCheckboxItem = ({
  itemLabel,
  rightSlot,
  ...props
}: DropdownItemProps) => {
  return (
    <CheckboxItem onSelect={(e) => e.preventDefault()} {...props}>
      <DropdownItemCheckedIndicator>
        <MdCheck />
      </DropdownItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <DropdownRightSlot>{rightSlot}</DropdownRightSlot>}
    </CheckboxItem>
  )
}
