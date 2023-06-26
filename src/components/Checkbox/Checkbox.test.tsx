import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Checkbox } from './index'
import userEvent from '@testing-library/user-event'

describe('Button component', () => {
  render(<Checkbox id="checkbox-test" label="This is a checkbox" />)

  it('renders correctly', () => {
    expect(screen.getByText('This is a checkbox')).toBeDefined()
  })

  it('checks when clicked', () => {
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('true')
  })

  it('unchecks when clicked again', () => {
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })

  it('checks when pressing space while focused', async () => {
    const user = userEvent.setup()

    const checkbox = screen.getByRole('checkbox')

    await user.keyboard('[Tab]')
    await user.keyboard('[Space]')

    expect(checkbox.getAttribute('aria-checked')).toBe('true')
  })
})
