import {
  DropdownMenuProps as RadixDropdownProps,
  Root,
  Trigger,
  Portal,
} from '@radix-ui/react-dropdown-menu'
import { DropdownItemProps } from '../components/DropdownItem'
import { DropdownContent, DropdownSeparator } from '../components/parts'
import { Fragment } from 'react'
import { DropdownGroup } from '../components/DropdownGroup'

interface DropdownItemsGroup {
  groupName?: string
  items: DropdownItemProps[]
}

interface DropdownProps extends RadixDropdownProps {
  items: DropdownItemsGroup[]
}

export const Dropdown = ({ items, children, ...props }: DropdownProps) => {
  const lastGroupIndex = items.length - 1

  return (
    <Root {...props}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <DropdownContent width="md" sideOffset={8}>
          {items.map((group, index) => {
            console.log(group.items)
            return (
              <Fragment key={`Dropdown-group-${index}`}>
                <DropdownGroup {...group} />
                {index !== lastGroupIndex && <DropdownSeparator />}
              </Fragment>
            )
          })}
        </DropdownContent>
      </Portal>
    </Root>
  )
}
