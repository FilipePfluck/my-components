import { styled } from '@/styled-system/jsx'
import { labelContainer, labelRequiredIndicator } from '@/styled-system/recipes'
import { LabelHTMLAttributes } from 'react'

const LabelContainer = styled('label', labelContainer)
const LabelRequiredIndicator = styled('span', labelRequiredIndicator)

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

export const Label = ({ children, isRequired, ...props }: LabelProps) => {
  return (
    <LabelContainer {...props}>
      {children}
      {isRequired && (
        <LabelRequiredIndicator aria-hidden>*</LabelRequiredIndicator>
      )}
    </LabelContainer>
  )
}
