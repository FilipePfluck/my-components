import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import {
  DropdownRightSlot,
  DropdownSubContent,
  DropdownSubTrigger,
} from './parts'
import { MdChevronRight } from 'react-icons/md'

interface DropdownSubTriggerProps
  extends DropdownMenu.DropdownMenuSubTriggerProps {
  label: string
  itemPaddingLeft?: 'none' | 'md'
}

export const DropdownSub = ({
  label,
  children,
  itemPaddingLeft,
  ...props
}: DropdownSubTriggerProps) => {
  return (
    <DropdownMenu.Sub {...props}>
      <DropdownSubTrigger type="submenu">
        {label}
        <DropdownRightSlot>
          <MdChevronRight />
        </DropdownRightSlot>
      </DropdownSubTrigger>

      <DropdownMenu.Portal>
        <DropdownSubContent itemPaddingLeft={itemPaddingLeft} sideOffset={4}>
          {children}
        </DropdownSubContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Sub>
  )
}
