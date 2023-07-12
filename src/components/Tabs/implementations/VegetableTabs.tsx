import { AnimatedTabs } from '../AnimatedTabs'

export const VegetableTabs = () => {
  const vegetables = [
    { name: 'tomato', emoji: '🍅' },
    {
      name: 'lettuce',
      emoji: '🥬',
    },
    {
      name: 'carrot',
      emoji: '🥕',
    },
    {
      name: 'pepper',
      emoji: '🌶️',
    },
  ] as const

  return <AnimatedTabs items={vegetables} defaultValue="tomato" />
}
