import * as Dialog from '@radix-ui/react-dialog'

import { AnimatePresence } from 'framer-motion'

import { Flex } from '@/styled-system/jsx'
import * as P from './parts'
import * as S from '../styles'
import { FiX } from 'react-icons/fi'

interface GenericItem {
  id: string
  name: string
  emoji: string
  description: string
}

type Items = {
  [key: string]: GenericItem
}

interface AnimatedModalProps<I extends Items> {
  w?: string
  id?: string
  items: I
  buttonRows: {
    size: 'sm' | 'lg'
    itemKey: Extract<keyof I, string>
  }[][]
}

export const AnimatedModal = <I extends Items>({
  id,
  items,
  buttonRows,
  w,
}: AnimatedModalProps<I>) => {
  return (
    <Flex gap="2" direction="column" w={w || '96'}>
      {buttonRows.map((row, rowIndex) => (
        <Flex key={`${id}-row-${rowIndex}`} gap="2">
          {row.map(({ itemKey, size }, index) => (
            <Dialog.Root key={`itemKey-${rowIndex}-${index}`}>
              <Dialog.Trigger asChild>
                <P.AnimatedTrigger data={items[itemKey]} size={size} />
              </Dialog.Trigger>

              <AnimatePresence>
                <Dialog.Portal>
                  <S.Overlay />
                  <S.AnimatedDialogContent>
                    <P.AnimatedModalContent layoutId={`container-${itemKey}`}>
                      <P.AnimatedModalName layoutId={`name-${itemKey}`}>
                        {items[itemKey].name}
                      </P.AnimatedModalName>
                      <Flex gap="2" alignItems="center">
                        <P.AnimatedModalEmoji layoutId={`emoji-${itemKey}`}>
                          {items[itemKey].emoji}
                        </P.AnimatedModalEmoji>
                        <P.AnimatedModalDescription>
                          {items[itemKey].description}
                        </P.AnimatedModalDescription>
                      </Flex>
                      <S.CloseButton aria-label="close">
                        <FiX />
                      </S.CloseButton>
                    </P.AnimatedModalContent>
                  </S.AnimatedDialogContent>
                </Dialog.Portal>
              </AnimatePresence>
            </Dialog.Root>
          ))}
        </Flex>
      ))}
    </Flex>
  )
}
