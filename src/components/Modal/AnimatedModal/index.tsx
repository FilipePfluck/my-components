import * as Dialog from '@radix-ui/react-dialog'

import { useState } from 'react'
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
    itemKey: keyof I
  }[][]
}

export const AnimatedModal = <I extends Items>({
  id,
  items,
  buttonRows,
  w = '96',
}: AnimatedModalProps<I>) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <Dialog.Root open={!!selectedId} onOpenChange={() => setSelectedId(null)}>
      <Flex gap="2" direction="column" w={w}>
        {buttonRows.map((row, index) => (
          <Flex key={`${id}-row-${index}`} gap="2">
            {row.map(({ itemKey, size }, index) => (
              <P.AnimatedTrigger
                key={`itemKey-${index}`}
                data={items[itemKey]}
                size={size}
                onClick={() => setSelectedId(items[itemKey].id)}
              />
            ))}
          </Flex>
        ))}
      </Flex>

      <AnimatePresence>
        {!!selectedId && (
          <Dialog.Portal>
            <S.Overlay />
            <S.AnimatedDialogContent>
              <P.AnimatedModalContent layoutId={`container-${selectedId}`}>
                <P.AnimatedModalName layoutId={`name-${selectedId}`}>
                  {items[selectedId].name}
                </P.AnimatedModalName>
                <Flex gap="2" alignItems="center">
                  <P.AnimatedModalEmoji layoutId={`emoji-${selectedId}`}>
                    {items[selectedId].emoji}
                  </P.AnimatedModalEmoji>
                  <P.AnimatedModalDescription>
                    {items[selectedId].description}
                  </P.AnimatedModalDescription>
                </Flex>
                <S.CloseButton aria-label="close">
                  <FiX />
                </S.CloseButton>
              </P.AnimatedModalContent>
            </S.AnimatedDialogContent>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
