import { useState } from 'react'
import * as RadixDialog from '@radix-ui/react-dialog'
import { DialogRoot } from '..'
import { Flex, styled } from '@/styled-system/jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { css, cva } from '@/styled-system/css'

import { CloseButton, dialogContentStyles, Overlay } from '../styles'
import { FiX } from 'react-icons/fi'

const StyledTrigger = styled(
  motion.button,
  cva({
    base: {
      bg: 'gray.50',
      rounded: 'lg',
      p: '4',
      boxShadow: 'lg',
      h: '20',
      display: 'flex',
      gap: '2',
      alignItems: 'center',
    },
    variants: {
      size: {
        sm: { flex: 1 },
        lg: { flex: 2 },
      },
    },
  }),
)

const fruits = {
  orange: {
    id: 'orange',
    name: 'Orange',
    emoji: '🍊',
    description:
      'The orange is a fruit of several citrus species of the Rutaceae family; primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as sour orange.',
  },
  apple: {
    id: 'apple',
    name: 'Apple',
    emoji: '🍎',
    description:
      'The apple is the pomaceous pseudo fruit of the apple tree, a tree of the Rosaceae family. It is one of the most cultivated tree pseudofruits, and the best known of the many members of the genus Malus that are used by humans.',
  },
  grape: {
    id: 'grape',
    name: 'Grape',
    emoji: '🍇',
    description:
      'The grape is the fruit of the vine, a plant of the Vitaceae family. It is often used to produce juice, jam, wine and raisins, and can also be consumed raw. Among the vine species we can mention: Vitis vinifera, the most common type of vine used in wine production in Europe;',
  },
  banana: {
    id: 'banana',
    name: 'Banana',
    emoji: '🍌',
    description:
      'Banana is a pseudoberry of the banana tree, a perennial herbaceous stem plant of the Musaceae family. They are grown in 130 countries. Originally from Southeast Asia, they are currently cultivated in practically all tropical regions of the planet.',
  },
} as const

interface AnimatedTriggerProps {
  onClick: () => void
  emoji: string
  name: string
  id: string
  size: 'sm' | 'lg'
}

const AnimatedTrigger = ({
  emoji,
  id,
  name,
  onClick,
  size,
}: AnimatedTriggerProps) => {
  return (
    <StyledTrigger size={size} onClick={onClick} layoutId={`container-${id}`}>
      <motion.p
        transition={{
          layout: {
            when: 'beforeChildren',
            duration: 0,
          },
          opacity: { duration: 0 },
        }}
        layoutId={`name-${id}`}
      >
        {name}
      </motion.p>
      <motion.p layoutId={`emoji-${id}`}>{emoji}</motion.p>
    </StyledTrigger>
  )
}

export const AnimatedDialog = () => {
  const [selectedId, setSelectedId] = useState<keyof typeof fruits | null>(null)

  return (
    <DialogRoot open={!!selectedId} onOpenChange={() => setSelectedId(null)}>
      <Flex gap="2" direction="column" w="96">
        <Flex gap="2">
          <AnimatedTrigger
            size="sm"
            name={fruits.orange.name}
            emoji={fruits.orange.emoji}
            id={fruits.orange.id}
            onClick={() => {
              setSelectedId(fruits.orange.id)
            }}
          />
          <AnimatedTrigger
            size="lg"
            name={fruits.apple.name}
            emoji={fruits.apple.emoji}
            id={fruits.apple.id}
            onClick={() => {
              setSelectedId(fruits.apple.id)
            }}
          />
        </Flex>
        <Flex gap="2">
          <AnimatedTrigger
            size="lg"
            name={fruits.banana.name}
            emoji={fruits.banana.emoji}
            id={fruits.banana.id}
            onClick={() => {
              setSelectedId(fruits.banana.id)
            }}
          />
          <AnimatedTrigger
            size="sm"
            name={fruits.grape.name}
            emoji={fruits.grape.emoji}
            id={fruits.grape.id}
            onClick={() => {
              setSelectedId(fruits.grape.id)
            }}
          />
        </Flex>
      </Flex>

      <AnimatePresence>
        {selectedId && (
          <RadixDialog.Portal>
            <Overlay />
            <RadixDialog.Content
              className={css({
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minW: 'max-content',
              })}
            >
              <motion.div
                layoutId={`container-${selectedId}`}
                transition={{ duration: 0.3 }}
                className={cva({
                  base: {
                    ...dialogContentStyles,
                  },
                })()}
              >
                <motion.p
                  layoutId={`name-${selectedId}`}
                  transition={{
                    layout: {
                      when: 'beforeChildren',
                      duration: 0,
                    },
                    opacity: { duration: 0 },
                  }}
                  className={css({ fontSize: 'xl', fontWeight: 500 })}
                >
                  {fruits[selectedId].name}
                </motion.p>

                <Flex gap="2" alignItems="center">
                  <motion.p
                    layoutId={`emoji-${selectedId}`}
                    className={css({ fontSize: '96px' })}
                  >
                    {fruits[selectedId].emoji}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={css({ fontSize: 'sm', color: 'gray.800' })}
                  >
                    {fruits[selectedId].description}
                  </motion.p>
                </Flex>

                <CloseButton aria-label="Close">
                  <FiX />
                </CloseButton>
              </motion.div>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </DialogRoot>
  )
}
