import * as RadixTabs from '@radix-ui/react-tabs'

import * as S from './styles'

interface TabsProps extends RadixTabs.TabsProps {
  list: {
    value: string
    label: string
  }[]
}

export const TabTrigger = S.Trigger
export const TabContent = S.Content
export const TabList = S.List
export const TabRoot = S.Root

export const Tabs = ({ children, list, ...props }: TabsProps) => {
  return (
    <S.Root {...props}>
      <S.List>
        {list.map(({ label, value }) => {
          return (
            <S.Trigger key={value} value={value}>
              {label}
            </S.Trigger>
          )
        })}
      </S.List>
      {children}
    </S.Root>
  )
}
