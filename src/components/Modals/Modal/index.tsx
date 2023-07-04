import * as RadixDialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { FiX } from 'react-icons/fi'

import { css } from '@/styled-system/css'
import { Scrollable } from '@/components/Scrollable'

export const DialogRoot = RadixDialog.Root

export const DialogTrigger = RadixDialog.Trigger

interface DialogProps extends RadixDialog.DialogContentProps {
  title?: string
  description?: string
}

export const Dialog = ({ children, title, description }: DialogProps) => {
  return (
    <RadixDialog.Portal>
      <S.Overlay />
      <S.Content>
        {(title || description) && (
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
          </S.Header>
        )}
        <Scrollable
          size="lg"
          borderSize="lg"
          className={css({ w: 'calc(100% + 8px)' })}
        >
          {children}
        </Scrollable>

        <S.CloseButton aria-label="Close">
          <FiX />
        </S.CloseButton>
      </S.Content>
    </RadixDialog.Portal>
  )
}
