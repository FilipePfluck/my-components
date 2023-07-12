'use client'

import { TabContent, TabList, TabRoot, TabTrigger } from '..'

import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'
import { useEffect, useState } from 'react'
import { AnimatePresence, Variant, Variants, motion } from 'framer-motion'

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

const Trigger = ({ isSelected, label, value }: TriggerProps) => {
  return (
    <TabTrigger value={value} activeIndicator="none">
      {label}
      {isSelected && <SelectedIndicator layoutId="tab-indicator" />}
    </TabTrigger>
  )
}

const foods = ['tomato', 'lettuce', 'cheese'] as const

const emojis = {
  tomato: '🍅',
  lettuce: '🥬',
  cheese: '🧀',
}

interface TabContentContentProps {
  tab: keyof typeof emojis
  currentTab: keyof typeof emojis
  prevTab: keyof typeof emojis
}

const TabContentContent = ({
  tab,
  currentTab,
  prevTab,
}: TabContentContentProps) => {
  let hiddenVariant: Variant = {}
  let exitVariant: Variant = {}

  if (tab === 'cheese') {
    hiddenVariant = { x: 100, opacity: 0, scale: 0.6 }
    exitVariant = { x: 100, opacity: 0, scale: 0.6 }
  }

  if (tab === 'tomato') {
    hiddenVariant = { x: -100, opacity: 0, scale: 0.6 }
    exitVariant = { x: -100, opacity: 0, scale: 0.6 }
  }

  if (tab === 'lettuce') {
    if (prevTab === 'tomato') {
      hiddenVariant = { x: 100, opacity: 0, scale: 0.6 }
    }

    if (prevTab === 'cheese') {
      hiddenVariant = { x: -100, opacity: 0, scale: 0.6 }
    }

    // this means the lettuce is exiting
    if (prevTab === 'lettuce') {
      if (currentTab === 'tomato') {
        exitVariant = { x: 100, opacity: 0, scale: 0.6 }
      }

      if (currentTab === 'cheese') {
        exitVariant = { x: -100, opacity: 0, scale: 0.6 }
      }
    }
  }

  const variants = {
    hidden: hiddenVariant,
    visible: { x: 0, opacity: 1, scale: 1 },
    exit: exitVariant,
  }

  return (
    <AnimatePresence>
      <Text
        initial="hidden"
        animate={tab === currentTab ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants as Variants}
        key={emojis[tab]}
      >
        {emojis[tab]}
      </Text>
    </AnimatePresence>
  )
}

type Food = 'tomato' | 'lettuce' | 'cheese'

export const FoodTabs = () => {
  const [value, setValue] = useState<Food>('tomato')
  const [prevTab, setPrevTab] = useState<Food>('tomato')

  useEffect(() => {
    setPrevTab(value)
  }, [value])

  return (
    // @ts-ignore
    <TabRoot defaultValue="tomato" value={value} onValueChange={setValue}>
      <TabList>
        <Trigger
          value="tomato"
          label="🍅 Tomato"
          isSelected={value === 'tomato'}
        />
        <Trigger
          value="lettuce"
          label="🥬 Lettuce"
          isSelected={value === 'lettuce'}
        />
        <Trigger
          value="cheese"
          label="🧀 Cheese"
          isSelected={value === 'cheese'}
        />
      </TabList>
      {foods.map((food) => (
        <TabContent
          position="absolute"
          top="48px"
          height="240px"
          w="full"
          key={food}
          value={food}
          forceMount
        >
          <TabContentContent tab={food} currentTab={value} prevTab={prevTab} />
        </TabContent>
      ))}
    </TabRoot>
  )
}
