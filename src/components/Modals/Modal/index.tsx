import * as RadixDialog from '@radix-ui/react-dialog'
import { FiX } from 'react-icons/fi'
import { styled } from '@/styled-system/jsx'
import {
  dialogClose,
  dialogContent,
  dialogDescription,
  dialogHeader,
  dialogOverlay,
  dialogTitle,
} from '@/styled-system/recipes'
import { css } from '@/styled-system/css'
import { Scrollable } from '@/components/Scrollable'

export const DialogRoot = RadixDialog.Root

export const DialogTrigger = RadixDialog.Trigger

const DialogOverlay = styled(RadixDialog.Overlay, dialogOverlay)

const DialogContent = styled(RadixDialog.Content, dialogContent)

const DialogClose = styled(RadixDialog.Close, dialogClose)

export const DialogTitle = styled(RadixDialog.Title, dialogTitle)

export const DialogDescription = styled(
  RadixDialog.Description,
  dialogDescription,
)

export const DialogHeader = styled('header', dialogHeader)

interface DialogProps extends RadixDialog.DialogContentProps {
  title?: string
  description?: string
}

export const Dialog = ({ children, title, description }: DialogProps) => {
  return (
    <RadixDialog.Portal>
      <DialogOverlay />
      <DialogContent>
        {(title || description) && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        )}
        <Scrollable
          size="lg"
          borderSize="lg"
          className={css({ w: 'calc(100% + 8px)' })}
        >
          {children}
        </Scrollable>

        <DialogClose aria-label="Close">
          <FiX />
        </DialogClose>
      </DialogContent>
    </RadixDialog.Portal>
  )
}
