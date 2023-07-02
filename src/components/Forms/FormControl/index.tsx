import { styled } from '@/styled-system/jsx'
import {
  formControlContainer,
  formControlMessageContainer,
} from '@/styled-system/recipes'

import { FormControlProvider } from '@/hooks/useFormControl'

import { Label } from '../Label'
import { HelperMessage } from '../HelperMessage'
import { ErrorMessage } from '../ErrorMessage'
import { ReactNode } from 'react'

const FormControlContainer = styled('div', formControlContainer)
const FormControlMessageContainer = styled('div', formControlMessageContainer)

interface FormControlProps {
  id: string
  label: string
  isRequired?: boolean
  errorMessage?: string
  helperMessage?: string
  children: ReactNode
}

export const FormControl = ({
  id,
  label,
  isRequired = false,
  errorMessage,
  helperMessage,
  children,
}: FormControlProps) => {
  return (
    <FormControlProvider
      id={id}
      isRequired={isRequired}
      ariaInvalid={!!errorMessage}
    >
      <FormControlContainer>
        <Label isRequired={isRequired} htmlFor={`${id}-form-element`}>
          {label}
        </Label>
        {children}
        <FormControlMessageContainer>
          {!errorMessage && helperMessage && (
            <HelperMessage id={`${id}-helper-message`}>
              {helperMessage}
            </HelperMessage>
          )}
          {errorMessage && (
            <ErrorMessage id={`${id}-error-message`}>
              {errorMessage}
            </ErrorMessage>
          )}
        </FormControlMessageContainer>
      </FormControlContainer>
    </FormControlProvider>
  )
}
