import * as RadixHoverCard from '@radix-ui/react-hover-card'

import { HoverCard } from '../index'

import * as S from '../styles'
import { Flex } from '@/styled-system/jsx'

interface StatProps {
  number: string
  label: string
}

const Stat = ({ label, number }: StatProps) => {
  return (
    <Flex gap="1">
      <S.Text bold>{number}</S.Text>
      <S.Text faded>{label}</S.Text>
    </Flex>
  )
}

export const Social = () => {
  return (
    <RadixHoverCard.Root>
      <RadixHoverCard.Trigger asChild>
        <S.Trigger
          href="https://twitter.com/radix_ui"
          target="_blank"
          rel="noreferrer noopener"
        >
          <S.Img
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
        </S.Trigger>
      </RadixHoverCard.Trigger>

      <HoverCard>
        <Flex direction="column" gap="2">
          <S.Img
            size="lg"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          />
          <Flex direction="column" gap="4">
            <div>
              <S.Text bold>Radix</S.Text>
              <S.Text faded>@radix_ui</S.Text>
            </div>
            <S.Text>
              Components, icons, colors, and templates for building
              high-quality, accessible UI. Free and open-source.
            </S.Text>

            <Flex gap="4">
              <Stat number="0" label="Following" />
              <Stat number="2900" label="Followers" />
            </Flex>
          </Flex>
        </Flex>
      </HoverCard>
    </RadixHoverCard.Root>
  )
}
