'use client'

import { TabContent, TabList, TabRoot, TabTrigger } from '.'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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
  direction: string
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

const FoodTab = ({ value, label, isSelected }: TriggerProps) => (
  <Trigger value={value} label={label} isSelected={isSelected} />
)

const AnimatedTabContent = ({
  name,
  value,
  previousValue,
  label,
  direction,
}: AnimatedTabContentProps) => {
  const isDefaultValue = name === value && !previousValue
  const isActive = name === value
  const isExiting = name === previousValue

  const [animate, setAnimate] = useState(isActive ? 'visible' : 'hidden')

  useEffect(() => {
    if (isActive) {
      setAnimate('visible')
    } else {
      if (isExiting) {
        setAnimate('exit')
      }
    }
  }, [isExiting, isActive])

  useEffect(() => {
    // @ts-ignore
    let timeoutId = null

    if (animate === 'exit') {
      timeoutId = setTimeout(() => {
        setAnimate('hidden')
      }, 250)
    }

    // if the user is retarded and keeps changing the state before 250ms,
    // the timeout will be canceled
    return () => {
      // @ts-ignore
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [animate])

  const variants = {
    hidden: {
      x: direction === 'right' ? -100 : 100,
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      x: direction === 'right' ? -100 : 100,
      opacity: 0,
      scale: 0.6,
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
          animate={animate}
          exit="exit"
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
  const [direction, setDirection] = useState('right')

  const handleValueChange = (v: string) => {
    setValue((prevState) => {
      setPreviousValue(prevState)

      const currentValueIndex = items.findIndex((item) => {
        return item.name === v
      })

      const previousValueIndex = items.findIndex((item) => {
        return item.name === prevState
      })

      const newDirection =
        currentValueIndex > previousValueIndex ? 'right' : 'left'
      setDirection(newDirection)

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
          previousValue={previousValue}
          direction={direction}
        />
      ))}
    </TabRoot>
  )
}
