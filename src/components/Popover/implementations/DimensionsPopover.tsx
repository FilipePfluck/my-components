import { IconButton } from '@/components/IconButton'
import { Popover, PopoverRoot, PopoverTrigger } from '..'
import { MdSettings } from 'react-icons/md'
import { FormControl } from '@/components/Forms/FormControl'
import { Input } from '@/components/Forms/Input'
import { Flex } from '@/styled-system/jsx'

interface DimensionInputProps {
  id: string
  label: string
  placeholder: string
}

const DimensionInput = ({ id, label, placeholder }: DimensionInputProps) => {
  return (
    <FormControl
      id={id}
      label={label}
      messageContainerHeight="auto"
      direction="row"
      justifyContent="space-between"
    >
      <Input size="sm" width="md" placeholder={placeholder} />
    </FormControl>
  )
}

export const DimensionsPopover = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <IconButton aria-label="Open dimensions settings">
          <MdSettings />
        </IconButton>
      </PopoverTrigger>
      <Popover width="lg">
        <p>Dimension</p>
        <Flex direction="column" gap="2">
          <DimensionInput id="width" label="Width" placeholder="200px" />
          <DimensionInput id="maxWidth" label="Max Width" placeholder="100%" />
          <DimensionInput id="height" label="Height" placeholder="200px" />
          <DimensionInput
            id="maxHeight"
            label="Max Height"
            placeholder="100%"
          />
        </Flex>
      </Popover>
    </PopoverRoot>
  )
}
