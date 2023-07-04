import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'

import * as S from '../styles'
import { DropdownItem, DropdownItemProps } from './Item'

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
      {groupName && <S.Label>{groupName}</S.Label>}
      {items.map((item) => (
        <DropdownItem key={item.itemLabel} {...item} />
      ))}
    </DropdownMenuGroup>
  )
}
