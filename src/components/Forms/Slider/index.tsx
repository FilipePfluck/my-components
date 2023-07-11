import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider'

import * as S from './styles'

interface SliderProps extends RadixSliderProps {
  thumbLabel: string
}

export const Slider = ({ thumbLabel, ...props }: SliderProps) => {
  return (
    <S.Root {...props}>
      <S.Track>
        <S.Range />
      </S.Track>
      <S.Thumb aria-label={thumbLabel} />
    </S.Root>
  )
}
