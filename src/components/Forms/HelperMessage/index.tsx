import { styled } from '@/styled-system/jsx'
import { helperMessageContainer } from '@/styled-system/recipes'
import { ReactNode } from 'react'

const HelperMessageContainer = styled('p', helperMessageContainer)

interface HelperMessageProps {
  id: string
  children: ReactNode
}

export const HelperMessage = ({ children, id }: HelperMessageProps) => {
  return <HelperMessageContainer id={id}>{children}</HelperMessageContainer>
}
