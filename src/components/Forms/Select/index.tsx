import { ForwardedRef, forwardRef } from 'react'
import * as RadixSelect from '@radix-ui/react-select'

import * as S from './styles'
import { MdCheck } from 'react-icons/md'

const SelectItemComponent = (
  { children, ...props }: RadixSelect.SelectItemProps,
  forwardedRef: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.SelectItem {...props} ref={forwardedRef}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <S.SelectItemIndicator>
        <MdCheck />
      </S.SelectItemIndicator>
    </S.SelectItem>
  )
}

const SelectItem = forwardRef(SelectItemComponent)

export const Select = () => {
  return (
    <RadixSelect.Root>
      <S.SelectTrigger>
        <RadixSelect.Value placeholder="select a value" />
      </S.SelectTrigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={S.selectContentClassname()}
          position="popper"
          sideOffset={16}
        >
          <S.SelectViewport>
            <RadixSelect.Group>
              <S.SelectLabel>Fruits</S.SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="grape">Grape</SelectItem>
              <S.SelectSeparator />
              <S.SelectLabel>Vegetables</S.SelectLabel>
              <SelectItem value="cauliflower">Cauliflower</SelectItem>
              <SelectItem value="potato">Potato</SelectItem>
              <SelectItem value="pumpkim">Pumpkim</SelectItem>
              <SelectItem value="yam">Yam</SelectItem>
            </RadixSelect.Group>
          </S.SelectViewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
