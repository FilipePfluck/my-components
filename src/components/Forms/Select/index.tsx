import { ForwardedRef, forwardRef } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { SelectProps as RadixSelectProps } from '@radix-ui/react-select'

import * as S from './styles'
import { MdCheck, MdExpandLess, MdExpandMore } from 'react-icons/md'

interface SelectItemProps extends RadixSelect.SelectItemProps {
  rightSlot?: string
}

const SelectItemComponent = (
  { children, rightSlot, ...props }: SelectItemProps,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.SelectItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}

      <S.SelectItemIndicator>
        <MdCheck />
      </S.SelectItemIndicator>
    </S.SelectItem>
  )
}

const SelectItem = forwardRef(SelectItemComponent)

interface SelectGroup {
  label?: string
  items: {
    value: string
    label: string
    rightSlot?: string
  }[]
}

interface SelectProps extends RadixSelectProps {
  placeholder: string
  groups: SelectGroup[]
  width?: 'sm' | 'md' | 'lg' | 'auto' | 'full'
}

export const Select = ({
  groups,
  placeholder,
  width,
  ...props
}: SelectProps) => {
  const groupsLength = groups.length

  return (
    <RadixSelect.Root {...props}>
      <S.SelectTrigger
        aria-label={placeholder}
        data-testid="SelectTrigger"
        width={width}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <MdExpandMore aria-hidden="true" />
      </S.SelectTrigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={S.selectContentClassname()}
          position="popper"
          sideOffset={16}
        >
          <S.SelectScrollUpButton aria-label="scroll up">
            <MdExpandLess />
          </S.SelectScrollUpButton>
          <S.SelectViewport>
            {groups.map((group, index) => (
              <RadixSelect.Group key={`select-group-${index}`}>
                {!!group.label && <S.SelectLabel>{group.label}</S.SelectLabel>}
                {group.items.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    rightSlot={item.rightSlot}
                  >
                    {item.label}
                  </SelectItem>
                ))}
                {index + 1 < groupsLength && <S.SelectSeparator />}
              </RadixSelect.Group>
            ))}
          </S.SelectViewport>
          <S.SelectScrollDownButton aria-label="scroll down">
            <MdExpandMore />
          </S.SelectScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
