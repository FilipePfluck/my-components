import { ReactNode } from 'react'
import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'

import { DropdownItem as DropdownDefaultItem, DropdownRightSlot } from './parts'

export interface DropdownItemProps extends DropdownMenuItemProps {
  itemLabel: string
  rightSlot?: ReactNode

  type?: 'default' | 'submenu'
}

export const DropdownItem = ({
  itemLabel,
  rightSlot,
  ...props
}: DropdownItemProps) => {
  return (
    <DropdownDefaultItem {...props}>
      {itemLabel}
      {rightSlot && <DropdownRightSlot>{rightSlot}</DropdownRightSlot>}
    </DropdownDefaultItem>
  )
}
