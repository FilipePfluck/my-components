import { Flex } from '@/styled-system/jsx'
import * as S from './styles'

interface RadioGroupProps {
  items: {
    id: string
    label: string
  }[]
}

export const RadioGroup = ({ items }: RadioGroupProps) => {
  return (
    <S.Root>
      {items.map(({ id, label }) => {
        return (
          <Flex key={id} gap="2">
            <S.RadioItem
              value={label}
              id={id}
              data-testid={`radio-${id}`}
              aria-labelledby={`label-${id}`}
            >
              <S.RadioIndicator />
            </S.RadioItem>
            <S.Label id={`label-${id}`}>{label}</S.Label>
          </Flex>
        )
      })}
    </S.Root>
  )
}
