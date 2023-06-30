import { css } from '@/styled-system/css'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import {
  DropdownArrow,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
} from '../components/parts'
import { DropdownItem } from '../components/DropdownItem'
import { DropdownCheckboxItem } from '../components/DropdownCheckboxItem'
import { MdMenu } from 'react-icons/md'
import { DropdownRadioItem } from '../components/DropdownRadioItem'
import { useState } from 'react'
import { DropdownSub } from '../components/DropdownSub'

export const RadixExampleDropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          aria-label="Open dropdown"
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
        >
          <MdMenu />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <DropdownContent width="md" itemPaddingLeft="md" sideOffset={8}>
          <DropdownArrow />

          <Dropdown.Group>
            <DropdownItem itemLabel="New Tab" rightSlot="⌘+T" />
            <DropdownItem itemLabel="New Window" rightSlot="⌘+N" />
            <DropdownItem
              itemLabel="New Private Window"
              rightSlot="⇧+⌘+N"
              disabled
            />
            <DropdownSub label="More Tools" itemPaddingLeft="md">
              <Dropdown.Group>
                <DropdownItem itemLabel="Save Page As" rightSlot="⌘+S" />
                <DropdownItem itemLabel="Create Shortcut" />
                <DropdownItem itemLabel="Name Window" />
              </Dropdown.Group>
              <DropdownSeparator />
              <DropdownItem itemLabel="Developer Tools" />
            </DropdownSub>
          </Dropdown.Group>

          <DropdownSeparator />

          <Dropdown.Group>
            <DropdownCheckboxItem
              itemLabel="Show Bookmarks"
              rightSlot="⌘+B"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            />
            <DropdownCheckboxItem
              itemLabel="Show Full URLs"
              rightSlot="⌘+B"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            />
          </Dropdown.Group>

          <DropdownSeparator />

          <Dropdown.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownLabel>People</DropdownLabel>
            <DropdownRadioItem value="Pedro Duarte" itemLabel="Pedro Duarte" />
            <DropdownRadioItem value="Colm Tuite" itemLabel="Colm Tuite" />
          </Dropdown.RadioGroup>
        </DropdownContent>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
