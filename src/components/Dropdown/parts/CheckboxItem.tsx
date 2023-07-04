import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { MdCheck } from 'react-icons/md'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface DropdownItemProps extends DropdownMenuCheckboxItemProps {
  itemLabel: string
  rightSlot?: string
}

export const DropdownCheckboxItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: DropdownItemProps) => {
  const itemClassname = cx('dropdownItem', className)

  return (
    <S.CheckboxItem
      className={itemClassname}
      onSelect={(e) => e.preventDefault()}
      {...props}
    >
      <S.ItemCheckedIndicator>
        <MdCheck />
      </S.ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.CheckboxItem>
  )
}
