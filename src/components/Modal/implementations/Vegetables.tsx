import { AnimatedModal } from '../AnimatedModal'
import { vegetables } from './data'

export const VeggiesDialogs = () => {
  return (
    <AnimatedModal
      w="580px"
      items={vegetables}
      buttonRows={[
        [
          { itemKey: 'broccoli', size: 'lg' },
          { itemKey: 'corn', size: 'sm' },
          { itemKey: 'potato', size: 'sm' },
        ],
        [
          { itemKey: 'garlic', size: 'sm' },
          { itemKey: 'eggplant', size: 'sm' },
          { itemKey: 'onion', size: 'lg' },
        ],
      ]}
    />
  )
}
