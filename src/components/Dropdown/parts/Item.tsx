import { ReactNode } from 'react'
import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface DropdownItemProps extends DropdownMenuItemProps {
  itemLabel: string
  rightSlot?: ReactNode
}

export const DropdownItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: DropdownItemProps) => {
  const itemClassname = cx('dropdownItem', className)

  return (
    <S.Item className={itemClassname} {...props}>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.Item>
  )
}
