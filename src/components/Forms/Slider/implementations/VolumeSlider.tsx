'use client'

import { Flex } from '@/styled-system/jsx'
import { MdVolumeDown, MdVolumeOff, MdVolumeUp } from 'react-icons/md'
import { Slider } from '..'
import { useState } from 'react'
import { css } from '@/styled-system/css'

export const VolumeSlider = () => {
  const [value, setValue] = useState([50])

  return (
    <Flex align="center" gap="2" color="purple.500">
      {value[0] === 0 && <MdVolumeOff size={24} />}
      {value[0] > 0 && value[0] < 50 && <MdVolumeDown size={24} />}
      {value[0] >= 50 && <MdVolumeUp size={24} />}

      <p className={css({ w: '28px', textAlign: 'center' })}>{value[0]}</p>

      <Slider
        thumbLabel="Volume"
        defaultValue={[50]}
        max={100}
        step={1}
        value={value}
        onValueChange={setValue}
      />
    </Flex>
  )
}
