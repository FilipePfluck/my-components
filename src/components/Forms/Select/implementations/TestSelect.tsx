import { Select } from '..'

const group = {
  items: [
    { label: 'Item1', value: '1' },
    { label: 'Item2', value: '2' },
    { label: 'Item3', value: '3' },
  ],
}

export const TestSelect = () => {
  return <Select placeholder="This is a test" groups={[group]} />
}
