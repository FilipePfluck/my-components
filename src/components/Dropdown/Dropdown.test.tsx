import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { MessageExampleDropdown } from './implementations/MessageDropdown'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Message dropdown', () => {
  const { container } = render(<MessageExampleDropdown />)

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    const DropdownTrigger = screen.getByTestId('MessageDropdownTrigger')
    expect(DropdownTrigger).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it("doesn't open the menu by default", () => {
    const EditText = screen.queryByText('Edit message')
    expect(EditText).not.toBeInTheDocument()
  })

  it('can be focused', async () => {
    const DropdownTrigger = screen.getByTestId('MessageDropdownTrigger')

    await user.keyboard('[Tab]')

    expect(DropdownTrigger).toHaveFocus()
  })

  it('opens the menu when pressing space while it is focused', async () => {
    await user.keyboard('[Space]')

    const menu = screen.getByRole('menu')

    expect(menu).toBeInTheDocument()
  })

  it('focus the first element after opening the menu with the keyboard', async () => {
    const EditText = screen.queryByText('Edit message')
    expect(EditText).toHaveFocus()
  })

  it('can navigate the menu using the arrow keys', async () => {
    // this presses arrow down 3 times and then releases it
    await user.keyboard('{ArrowDown>3/}')

    const ReplyText = screen.queryByText('Reply')
    expect(ReplyText).toHaveFocus()
  })

  it('closes the menu when pressing esc', async () => {
    await user.keyboard('[Escape]')

    const menu = screen.queryByRole('menu')

    expect(menu).not.toBeInTheDocument()
  })

  it('opens the menu when clicking', async () => {
    const trigger = screen.getByTestId('MessageDropdownTrigger')

    await user.click(trigger)

    const menu = screen.getByRole('menu')

    expect(menu).toBeInTheDocument()
  })
})
