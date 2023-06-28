import { DropdownItem, DropdownItemProps } from './DropdownItem'

import { DropdownLabel } from '../components/parts'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'

interface DropdownItemsGroup {
  groupName?: string
  items: DropdownItemProps[]
}

export const DropdownGroup = ({
  groupName,
  items,
  ...props
}: DropdownItemsGroup) => {
  return (
    <DropdownMenuGroup {...props}>
      {groupName && <DropdownLabel>{groupName}</DropdownLabel>}
      {items.map((item) => (
        <DropdownItem key={item.itemLabel} {...item} />
      ))}
    </DropdownMenuGroup>
  )
}
