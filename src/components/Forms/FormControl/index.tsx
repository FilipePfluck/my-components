import * as S from './styles'

import { FormControlProvider } from '@/hooks/useFormControl'

import { Label } from '../Label'
import { HelperMessage } from '../HelperMessage'
import { ErrorMessage } from '../ErrorMessage'
import { ReactNode } from 'react'
import { Flex, HTMLStyledProps } from '@/styled-system/jsx'
import { SimpleSpread } from '@/types/utils'

interface ExtraFormControlProps {
  id: string
  label: string
  isRequired?: boolean
  errorMessage?: string
  helperMessage?: string
  children: ReactNode
  messageContainerHeight?: 'fixed' | 'auto'
  direction?: 'column' | 'row'
}

interface FormControlProps
  extends SimpleSpread<HTMLStyledProps<'div'>, ExtraFormControlProps> {}

export const FormControl = ({
  id,
  label,
  isRequired = false,
  errorMessage,
  helperMessage,
  children,
  messageContainerHeight,
  direction,
  ...props
}: FormControlProps) => {
  return (
    <FormControlProvider
      id={id}
      isRequired={isRequired}
      ariaInvalid={!!errorMessage}
    >
      <S.FormControlContainer direction={direction} {...props}>
        <Label isRequired={isRequired} htmlFor={`${id}-form-element`}>
          {label}
        </Label>
        <Flex direction="column" gap="2" maxW="full">
          {children}
          <S.FormControlMessageContainer height={messageContainerHeight}>
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
          </S.FormControlMessageContainer>
        </Flex>
      </S.FormControlContainer>
    </FormControlProvider>
  )
}
