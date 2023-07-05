import { SwitchProps } from '@radix-ui/react-switch'
import * as S from './styles'

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <S.Root {...props}>
      <S.Thumb />
    </S.Root>
  )
}
