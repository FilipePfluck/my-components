import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RadioGroup } from './index'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

const items = [
  { id: 'r1', label: 'Default' },
  { id: 'r2', label: 'Comfortable' },
  { id: 'r3', label: 'Compact' },
]

const user = userEvent.setup()

describe('Radio group component', () => {
  const { container } = render(<RadioGroup items={items} />)

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByText('Default')).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('checks when pressing space while focused', async () => {
    const radio = screen.getByTestId('radio-r1')

    await user.keyboard('[Tab]')
    await user.keyboard('[Space]')

    expect(radio.getAttribute('aria-checked')).toBe('true')
  })

  it('checks the next item when pressing arrow down', async () => {
    const radio = screen.getByTestId('radio-r2')

    await user.keyboard('[ArrowDown]')

    expect(radio).toHaveFocus()

    await user.keyboard('[Space]')

    expect(radio.getAttribute('aria-checked')).toBe('true')
  })

  it('checks when clicked', async () => {
    const radio = screen.getByTestId('radio-r1')
    await user.click(radio)

    expect(radio.getAttribute('aria-checked')).toBe('true')
  })
})
