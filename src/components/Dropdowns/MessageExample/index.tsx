import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { css } from '@/styled-system/css'
import {
  MdDelete,
  MdEdit,
  MdReply,
  MdShare,
  MdMoreVert,
  MdPushPin,
} from 'react-icons/md'

import { DropdownArrow, DropdownContent } from '../components/parts'
import { DropdownItem } from '../components/DropdownItem'

export const MessageExampleDropdown = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          aria-label="More options"
          className={css({
            fontFamily: 'inherit',
            borderRadius: '100%',
            height: '35px',
            width: '35px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'purple.500',
            backgroundColor: 'white',
          })}
          data-testid="MessageDropdownTrigger"
        >
          <MdMoreVert />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <DropdownContent
          data-testid="MessageDropdownMenuContent"
          sideOffset={8}
        >
          <DropdownArrow />

          <DropdownItem itemLabel="Edit message" rightSlot={<MdEdit />} />
          <DropdownItem itemLabel="Delete message" rightSlot={<MdDelete />} />
          <DropdownItem itemLabel="Pin message" rightSlot={<MdPushPin />} />
          <DropdownItem itemLabel="Reply" rightSlot={<MdReply />} />
          <DropdownItem itemLabel="Share" rightSlot={<MdShare />} />
        </DropdownContent>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
