import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import * as S from '../styles'

import { MdChevronRight } from 'react-icons/md'
import { cx } from '@/styled-system/css'

interface DropdownSubTriggerProps
  extends DropdownMenu.DropdownMenuSubTriggerProps {
  label: string
  itemPaddingLeft?: 'none' | 'md'
}

export const DropdownSub = ({
  label,
  children,
  itemPaddingLeft,
  className,
  ...props
}: DropdownSubTriggerProps) => {
  const triggerClassname = cx('dropdownItem', className)

  return (
    <DropdownMenu.Sub {...props}>
      <S.SubTrigger className={triggerClassname}>
        {label}
        <S.RightSlot>
          <MdChevronRight />
        </S.RightSlot>
      </S.SubTrigger>

      <DropdownMenu.Portal>
        <S.SubContent itemPaddingLeft={itemPaddingLeft} sideOffset={4}>
          {children}
        </S.SubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  )
}
