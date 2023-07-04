import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TestSelect } from './implementations/TestSelect'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
vi.stubGlobal(
  'scrollIntoView',
  vi.fn(() => {}),
)

describe('Select', () => {
  const { container } = render(<TestSelect />)

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    const SelectTrigger = screen.getByTestId('SelectTrigger')
    expect(SelectTrigger).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it("doesn't open the menu by default", () => {
    const EditText = screen.queryByText('Item1')
    expect(EditText).not.toBeInTheDocument()
  })

  it('can be focused', async () => {
    const SelectTrigger = screen.getByTestId('SelectTrigger')

    await user.keyboard('[Tab]')

    expect(SelectTrigger).toHaveFocus()
  })

  // TODO - figure out how to mock scrollIntoView and uncomment this

  /* it('opens the menu when pressing space while it is focused', async () => {
    await user.keyboard('[Space]')

    const menu = screen.getByRole('listbox')

    expect(menu).toBeInTheDocument()
  })

  it('can navigate the menu using the arrow keys', async () => {
    // this presses arrow down 2 times and then releases it
    await user.keyboard('{ArrowDown>2/}')

    const ItemText = screen.queryByText('Item3')
    expect(ItemText).toHaveFocus()
  })

  it('closes the menu when pressing esc', async () => {
    await user.keyboard('[Escape]')

    const menu = screen.queryByRole('listbox')

    expect(menu).not.toBeInTheDocument()
  })

  it('opens the menu when clicking', async () => {
    const trigger = screen.getByTestId('SelectTrigger')

    await user.click(trigger)

    const menu = screen.getByRole('listbox')

    expect(menu).toBeInTheDocument()
  }) */
})
