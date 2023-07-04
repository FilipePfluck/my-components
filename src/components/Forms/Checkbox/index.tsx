import { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox'
import * as S from './styles'

interface CheckboxProps extends RadixCheckboxProps {
  id: string
  label: string
}

export const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <S.Container>
      <S.Root id={id} aria-labelledby={`${id}-label`}>
        <S.Indicator />
      </S.Root>
      <S.Label htmlFor={id} id={`${id}-label`}>
        {label}
      </S.Label>
    </S.Container>
  )
}
