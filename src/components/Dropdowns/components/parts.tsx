import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { styled } from '@/styled-system/jsx'
import {
  dropdownArrow,
  dropdownContent,
  dropdownItem,
  dropdownItemCheckedIndicator,
  dropdownLabel,
  dropdownRightSlot,
  dropdownSeparator,
} from '@/styled-system/recipes'

// Contents
export const DropdownContent = styled(DropdownMenu.Content, dropdownContent)
export const DropdownSubContent = styled(
  DropdownMenu.SubContent,
  dropdownContent,
)

export const DropdownArrow = styled(DropdownMenu.Arrow, dropdownArrow)

// Items
export const DropdownItem = styled(DropdownMenu.Item, dropdownItem)
export const DropdownRadioItem = styled(DropdownMenu.RadioItem, dropdownItem)
export const DropdownCheckboxItem = styled(
  DropdownMenu.CheckboxItem,
  dropdownItem,
)
export const DropdownSubTrigger = styled(DropdownMenu.SubTrigger, dropdownItem)

export const DropdownLabel = styled(DropdownMenu.Label, dropdownLabel)

export const DropdownSeparator = styled(
  DropdownMenu.Separator,
  dropdownSeparator,
)

export const DropdownRightSlot = styled('div', dropdownRightSlot)

export const DropdownItemCheckedIndicator = styled(
  DropdownMenu.ItemIndicator,
  dropdownItemCheckedIndicator,
)
