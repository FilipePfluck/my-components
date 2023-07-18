import { MotionProps, motion } from 'framer-motion'

import * as S from './styles'
import { css } from '@/styled-system/css'
import { ForwardedRef, ReactNode, forwardRef } from 'react'

type WithChildren<T = {}> = T & { children?: ReactNode }

export const AnimatedModalContent = ({
  layoutId,
  children,
  ...props
}: MotionProps) => {
  return (
    <motion.div
      className={S.modalContentStyles}
      layoutId={layoutId}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedModalName = ({
  layoutId,
  children,
}: WithChildren<MotionProps>) => {
  return (
    <motion.p
      layoutId={layoutId}
      className={S.modalNameStyles}
      transition={{
        layout: {
          when: 'beforeChildren',
          duration: 0,
        },
        opacity: { duration: 0 },
      }}
    >
      {children}
    </motion.p>
  )
}

export const AnimatedModalEmoji = ({
  layoutId,
  children,
}: WithChildren<MotionProps>) => {
  return (
    <motion.p
      transition={{ duration: 0.2, ease: 'easeOut' }}
      layoutId={layoutId}
      className={css({ fontSize: '96px' })}
    >
      {children}
    </motion.p>
  )
}

export const AnimatedModalDescription = ({
  children,
}: WithChildren<MotionProps>) => {
  return (
    <motion.p
      className={S.modalDescriptionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {children}
    </motion.p>
  )
}

interface AnimatedTriggerProps {
  onClick?: () => void
  size: 'sm' | 'lg'
  data: {
    emoji: string
    name: string
    id: string
  }
}

const AnimatedTriggerComponent = (
  { data, size, onClick }: AnimatedTriggerProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const { emoji, id, name } = data

  return (
    <motion.button
      className={S.animatedTriggerStyles({
        size,
      })}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      layoutId={`container-${id}`}
      ref={ref}
    >
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
      <motion.p
        transition={{ duration: 0.15, ease: 'easeIn' }}
        layoutId={`emoji-${id}`}
        className={css({ ml: '2' })}
      >
        {emoji}
      </motion.p>
    </motion.button>
  )
}

export const AnimatedTrigger = forwardRef(AnimatedTriggerComponent)
