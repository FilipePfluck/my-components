import { AnimatedTabs } from '../AnimatedTabs'

export const ProteicTabs = () => {
  const proteins = [
    { name: 'meat', emoji: '🥩' },
    {
      name: 'cheese',
      emoji: '🧀',
    },
    {
      name: 'egg',
      emoji: '🥚',
    },
  ] as const

  return <AnimatedTabs items={proteins} defaultValue="cheese" />
}
