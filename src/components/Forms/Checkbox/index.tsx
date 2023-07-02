import { styled } from '@/styled-system/jsx'
import {
  checkboxContainer,
  checkboxIndicator,
  checkboxLabel,
  checkboxRoot,
} from '@/styled-system/recipes'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'

const CheckboxRoot = styled(RadixCheckbox.Root, checkboxRoot)
const CheckboxIndicator = styled(RadixCheckbox.Indicator, checkboxIndicator)
const CheckboxLabel = styled('label', checkboxLabel)
const CheckboxContainer = styled('div', checkboxContainer)

interface CheckboxProps extends RadixCheckboxProps {
  id: string
  label: string
}

export const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <CheckboxRoot id={id} aria-labelledby={`${id}-label`}>
        <CheckboxIndicator />
      </CheckboxRoot>
      <CheckboxLabel htmlFor={id} id={`${id}-label`}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  )
}
