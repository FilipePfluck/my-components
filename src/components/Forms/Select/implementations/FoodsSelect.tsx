import { Select } from '..'

const meats = {
  label: 'Meats',
  items: [
    { label: 'Beef', value: 'beef' },
    { label: 'Pork', value: 'pork' },
    { label: 'Chicken', value: 'chicken' },
  ],
}

const fruits = {
  label: 'Fruits',
  items: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Grape', value: 'grape' },
    { label: 'Pineapple', value: 'pineapple' },
  ],
}

const vegetables = {
  label: 'Vegetables',
  items: [
    { label: 'Carrot', value: 'carrot' },
    { label: 'Pumpkim', value: 'Pumpkim' },
    { label: 'Cauliflower', value: 'Cauliflower' },
    { label: 'Kale', value: 'Kale' },
  ],
}

export const FoodSelect = () => {
  return (
    <Select placeholder="Select a food" groups={[fruits, vegetables, meats]} />
  )
}
