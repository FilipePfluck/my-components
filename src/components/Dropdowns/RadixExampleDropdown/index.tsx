import { css } from '@/styled-system/css'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import {
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
} from '../components/parts'
import { DropdownItem } from '../components/DropdownItem'
import { DropdownCheckboxItem } from '../components/DropdownCheckboxItem'
import { MdMenu } from 'react-icons/md'
import { DropdownRadioItem } from '../components/DropdownRadioItem'
import { useState } from 'react'

export const RadixExampleDropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button
          aria-label="Open dropdown"
          className={css({
            all: 'unset',
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
        >
          <MdMenu />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <DropdownContent width="md">
          <Dropdown.Group>
            <DropdownItem
              itemLabel="New Tab"
              rightSlot="⌘+T"
              paddingLeft="md"
            />
            <DropdownItem
              itemLabel="New Window"
              rightSlot="⌘+N"
              paddingLeft="md"
            />
            <DropdownItem
              itemLabel="New Private Window"
              rightSlot="⇧+⌘+N"
              paddingLeft="md"
              disabled
            />
          </Dropdown.Group>

          <DropdownSeparator />

          <Dropdown.Group>
            <DropdownCheckboxItem
              paddingLeft="md"
              itemLabel="Show Bookmarks"
              rightSlot="⌘+B"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            />
            <DropdownCheckboxItem
              paddingLeft="md"
              itemLabel="Show Full URLs"
              rightSlot="⌘+B"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            />
          </Dropdown.Group>

          <DropdownSeparator />

          <Dropdown.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownLabel>People</DropdownLabel>
            <DropdownRadioItem
              paddingLeft="md"
              value="Pedro Duarte"
              itemLabel="Pedro Duarte"
            />
            <DropdownRadioItem
              paddingLeft="md"
              value="Colm Tuite"
              itemLabel="Colm Tuite"
            />
          </Dropdown.RadioGroup>
        </DropdownContent>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
