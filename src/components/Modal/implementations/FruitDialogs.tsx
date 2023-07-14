import { AnimatedModal } from '../AnimatedModal'
import { fruits } from './data'

export const FruitDialogs = () => {
  return (
    <AnimatedModal
      items={fruits}
      buttonRows={[
        [
          { itemKey: 'orange', size: 'sm' },
          { itemKey: 'apple', size: 'lg' },
        ],
        [
          { itemKey: 'banana', size: 'lg' },
          { itemKey: 'grape', size: 'sm' },
        ],
      ]}
    />
  )
}
