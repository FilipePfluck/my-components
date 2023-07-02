import { styled } from '@/styled-system/jsx'
import { errorMessageContainer } from '@/styled-system/recipes'
import { ReactNode } from 'react'

const ErrorMessageContainer = styled('p', errorMessageContainer)

interface ErrorMessageProps {
  id: string
  children: ReactNode
}

export const ErrorMessage = ({ children, id }: ErrorMessageProps) => {
  return <ErrorMessageContainer id={id}>{children}</ErrorMessageContainer>
}
