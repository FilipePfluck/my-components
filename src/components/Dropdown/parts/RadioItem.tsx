import { DropdownMenuRadioItemProps } from '@radix-ui/react-dropdown-menu'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface DropdownItemProps extends DropdownMenuRadioItemProps {
  itemLabel: string
  rightSlot?: string
}

export const DropdownRadioItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: DropdownItemProps) => {
  const itemClassname = cx('dropdownItem', className)

  return (
    <S.RadioItem
      className={itemClassname}
      onSelect={(e) => e.preventDefault()}
      {...props}
    >
      <S.ItemCheckedIndicator>•</S.ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.RadioItem>
  )
}
