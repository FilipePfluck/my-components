import * as Dropdown from '@radix-ui/react-dropdown-menu'

import * as S from '../styles'

import {
  MdDelete,
  MdEdit,
  MdReply,
  MdShare,
  MdMoreVert,
  MdPushPin,
} from 'react-icons/md'
import { DropdownItem } from '../parts/Item'
import { IconButton } from '@/components/IconButton'

export const MessageExampleDropdown = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger
        data-testid="MessageDropdownTrigger"
        aria-label="More options"
        asChild
      >
        <IconButton>
          <MdMoreVert />
        </IconButton>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <S.Content data-testid="MessageDropdownMenuContent" sideOffset={8}>
          <S.Arrow />

          <DropdownItem itemLabel="Edit message" rightSlot={<MdEdit />} />
          <DropdownItem itemLabel="Delete message" rightSlot={<MdDelete />} />
          <DropdownItem itemLabel="Pin message" rightSlot={<MdPushPin />} />
          <DropdownItem itemLabel="Reply" rightSlot={<MdReply />} />
          <DropdownItem itemLabel="Share" rightSlot={<MdShare />} />
        </S.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
