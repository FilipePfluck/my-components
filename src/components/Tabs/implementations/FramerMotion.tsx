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

const Trigger = ({ isSelected, label, value }: TriggerProps) => (
  <TabTrigger value={value} activeIndicator="none">
    {label}
    {isSelected && <SelectedIndicator layoutId="tab-indicator" />}
  </TabTrigger>
)

const foods = ['tomato', 'lettuce', 'cheese'] as const

const emojis = {
  tomato: '🍅',
  lettuce: '🥬',
  cheese: '🧀',
}

type Food = (typeof foods)[number]

interface TabContentContentProps {
  tab: Food
  currentTab: Food
  prevTab: Food
}

const getVariants = (tab: Food, prevTab: Food, currentTab: Food) => {
  let hiddenVariant: Variant = {}
  let exitVariant: Variant = {}

  switch (tab) {
    case 'cheese':
    case 'tomato':
      hiddenVariant = exitVariant = {
        x: tab === 'cheese' ? 100 : -100,
        opacity: 0,
        scale: 0.6,
      }
      break
    case 'lettuce':
      hiddenVariant = {
        x: prevTab === 'tomato' ? 100 : -100,
        opacity: 0,
        scale: 0.6,
      }
      if (prevTab === 'lettuce') {
        exitVariant = {
          x: currentTab === 'tomato' ? 100 : -100,
          opacity: 0,
          scale: 0.6,
        }
      }
      break
  }

  return {
    hidden: hiddenVariant,
    visible: { x: 0, opacity: 1, scale: 1 },
    exit: exitVariant,
  } as Variants
}

const TabContentContent = ({
  tab,
  currentTab,
  prevTab,
}: TabContentContentProps) => {
  const variants = getVariants(tab, prevTab, currentTab)

  return (
    <AnimatePresence>
      <Text
        initial="hidden"
        animate={tab === currentTab ? 'visible' : 'hidden'}
        exit="exit"
        variants={variants}
        key={emojis[tab]}
      >
        {emojis[tab]}
      </Text>
    </AnimatePresence>
  )
}

const FoodTab = ({ value, label, isSelected }: TriggerProps) => (
  <Trigger value={value} label={label} isSelected={isSelected} />
)

const FoodTabContent = ({
  food,
  value,
  prevTab,
}: {
  food: Food
  value: Food
  prevTab: Food
}) => (
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
)

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
        {foods.map((food) => (
          <FoodTab
            key={food}
            value={food}
            label={`${emojis[food]} ${
              food.charAt(0).toUpperCase() + food.slice(1)
            }`}
            isSelected={value === food}
          />
        ))}
      </TabList>
      {foods.map((food) => (
        <FoodTabContent
          key={food}
          food={food}
          value={value}
          prevTab={prevTab}
        />
      ))}
    </TabRoot>
  )
}
