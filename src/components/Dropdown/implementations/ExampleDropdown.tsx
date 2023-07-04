import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

import * as S from '../styles'
import { DropdownItem } from '../parts/Item'
import { DropdownSub } from '../parts/Submenu'
import { DropdownCheckboxItem } from '../parts/CheckboxItem'
import { DropdownRadioItem } from '../parts/RadioItem'

export const RadixExampleDropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <Dropdown.Root>
      <S.Trigger aria-label="Open dropdown">
        <MdMenu />
      </S.Trigger>
      <Dropdown.Portal>
        <S.Content width="md" itemPaddingLeft="md" sideOffset={8}>
          <S.Arrow />

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
              <S.Separator />
              <DropdownItem itemLabel="Developer Tools" />
            </DropdownSub>
          </Dropdown.Group>

          <S.Separator />

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

          <S.Separator />

          <Dropdown.RadioGroup value={person} onValueChange={setPerson}>
            <S.Label>People</S.Label>
            <DropdownRadioItem value="Pedro Duarte" itemLabel="Pedro Duarte" />
            <DropdownRadioItem value="Colm Tuite" itemLabel="Colm Tuite" />
          </Dropdown.RadioGroup>
        </S.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
