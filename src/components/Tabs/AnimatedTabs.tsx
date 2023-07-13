'use client'

import { TabContent, TabList, TabRoot, TabTrigger } from '.'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'
import { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'

const Text = styled(
  motion.p,
  cva({
    base: {
      fontSize: '128px',
      textAlign: 'center',
      position: 'absolute',
      // removing the parents padding
      w: 'calc(100% - 40px)',
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

interface GenericTabItem {
  name: string
  emoji: string
}

type TabItemsList<T extends readonly GenericTabItem[]> = {
  items: T
  defaultValue: T[number]['name']
}

interface AnimatedTabContentProps {
  value: string
  previousValue: string | null
  name: string
  label: string
  currentValueIndex: number
  thisValueIndex: number
}

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

const AnimatedTab = ({ value, label, isSelected }: TriggerProps) => (
  <Trigger value={value} label={label} isSelected={isSelected} />
)

const AnimatedTabContent = ({
  name,
  value,
  previousValue,
  label,
  currentValueIndex,
  thisValueIndex,
}: AnimatedTabContentProps) => {
  const isDefaultValue = name === value && !previousValue
  const isActive = name === value

  const variants: Variants = {
    hidden: {
      x: thisValueIndex > currentValueIndex ? 100 : -100,
      opacity: 0,
      scale: 0.6,
      transitionDuration: '0.1s',
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transitionDuration: '0.1s',
    },
  }

  return (
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
          initial={isDefaultValue ? 'visible' : 'hidden'}
          animate={isActive ? 'visible' : 'hidden'}
          variants={variants}
          key={name}
        >
          {label}
        </Text>
      </AnimatePresence>
    </TabContent>
  )
}

export const AnimatedTabs = <T extends readonly GenericTabItem[]>({
  defaultValue,
  items,
}: TabItemsList<T>) => {
  type Value = T[number]['name']
  type PrevValue = Value | null

  const [value, setValue] = useState<Value>(defaultValue)
  const [previousValue, setPreviousValue] = useState<PrevValue>(null)

  const valueIndex = items.findIndex((item) => {
    return item.name === value
  })

  const handleValueChange = (v: string) => {
    setValue((prevState) => {
      setPreviousValue(prevState)

      return v
    })
  }

  return (
    // @ts-ignore
    <TabRoot
      defaultValue="tomato"
      value={value}
      onValueChange={handleValueChange}
    >
      <TabList>
        {items.map(({ emoji, name }) => (
          <AnimatedTab
            key={name}
            value={name}
            label={`${emoji} ${name.charAt(0).toUpperCase() + name.slice(1)}`}
            isSelected={value === name}
          />
        ))}
      </TabList>
      {items.map(({ name, emoji }, index) => (
        <AnimatedTabContent
          key={name}
          name={name}
          value={value}
          label={emoji}
          previousValue={previousValue}
          thisValueIndex={index}
          currentValueIndex={valueIndex}
        />
      ))}
    </TabRoot>
  )
}
