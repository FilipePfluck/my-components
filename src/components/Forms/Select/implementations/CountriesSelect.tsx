import { Select } from '..'

const countries = {
  items: [
    { label: 'Brazil', value: 'brazil', rightSlot: '🇧🇷' },
    { label: 'United States', value: 'usa', rightSlot: '🇺🇸' },
    { label: 'Canada', value: 'canada', rightSlot: '🇨🇦' },
    { label: 'Portugal', value: 'portugal', rightSlot: '🇵🇹' },
    { label: 'Spain', value: 'spain', rightSlot: '🇪🇸' },
    { label: 'France', value: 'france', rightSlot: '🇫🇷' },
    { label: 'German', value: 'german', rightSlot: '🇩🇪' },
    { label: 'United Kingdom', value: 'uk', rightSlot: '🇬🇧' },
    { label: 'Italy', value: 'italy', rightSlot: '🇮🇹' },
    { label: 'Russia', value: 'russia', rightSlot: '🇷🇺' },
    { label: 'India', value: 'india', rightSlot: '🇮🇳' },
    { label: 'China', value: 'china', rightSlot: '🇨🇳' },
    { label: 'South korea', value: 'korea', rightSlot: '🇰🇷' },
    { label: 'Japan', value: 'japan', rightSlot: '🇯🇵' },
    { label: 'Australia', value: 'australia', rightSlot: '🇦🇺' },
  ],
}

export const CountrySelect = () => {
  return <Select placeholder="Pick a country" width="lg" groups={[countries]} />
}
