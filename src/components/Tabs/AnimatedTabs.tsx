'use client'

import { TabContent, TabList, TabRoot, TabTrigger } from '.'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Text = styled(
  motion.p,
  cva({
    base: {
      fontSize: '128px',
      textAlign: 'center',
      position: 'absolute',
      w: '280px',
      zIndex: '5',
      userSelect: 'none',
    },
  }),
)

const SelectedIndicator = styled(
  motion.div,
  cva({
    base: {
      position: 'absolute',
      bottom: '0',
      height: '2px',
      w: 'full',
      bg: 'purple.500',
    },
  }),
)

interface TriggerProps {
  value: string
  label: string
  isSelected: boolean
}

const Trigger = ({ isSelected, label, value }: TriggerProps) => (
  <TabTrigger value={value} activeIndicator="none">
    {label}
    {isSelected && <SelectedIndicator layoutId="tab-indicator" />}
  </TabTrigger>
)

const FoodTab = ({ value, label, isSelected }: TriggerProps) => (
  <Trigger value={value} label={label} isSelected={isSelected} />
)

interface AnimatedTabContentProps {
  value: string
  name: string
  label: string
}

const AnimatedTabContent = ({
  name,
  value,
  label,
}: AnimatedTabContentProps) => (
  <TabContent
    position="absolute"
    top="48px"
    height="240px"
    w="full"
    key={name}
    value={name}
    forceMount
  >
    <AnimatePresence>
      <Text
        initial="hidden"
        animate={name === value ? 'visible' : 'hidden'}
        exit="exit"
        // variants={variants}
        // key={emojis[tab]}
      >
        {label}
      </Text>
    </AnimatePresence>
  </TabContent>
)

interface GenericTabItem {
  name: string
  emoji: string
}

type TabItemsList<T extends readonly GenericTabItem[]> = {
  items: T
  defaultValue: T[number]['name']
}

export const AnimatedTabs = <T extends readonly GenericTabItem[]>({
  defaultValue,
  items,
}: TabItemsList<T>) => {
  const [value, setValue] = useState<T[number]['name']>(defaultValue)

  return (
    // @ts-ignore
    <TabRoot defaultValue="tomato" value={value} onValueChange={setValue}>
      <TabList>
        {items.map(({ emoji, name }) => (
          <FoodTab
            key={name}
            value={name}
            label={`${emoji} ${name.charAt(0).toUpperCase() + name.slice(1)}`}
            isSelected={value === name}
          />
        ))}
      </TabList>
      {items.map(({ name, emoji }) => (
        <AnimatedTabContent
          key={name}
          name={name}
          value={value}
          label={emoji}
        />
      ))}
    </TabRoot>
  )
}
