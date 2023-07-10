import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { DimensionsPopover } from './implementations/DimensionsPopover'
import { axe } from 'vitest-axe'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Dialog component', () => {
  const { container } = render(<DimensionsPopover />)

  it('renders the trigger', () => {
    expect(screen.getByLabelText('Open dimensions settings')).toBeDefined()
  })

  it('has no detectable a11y violations', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText('Dimension')).toBeNull()
  })

  it('should show the content after clicking on the trigger', async () => {
    const trigger = screen.getByLabelText('Open dimensions settings')
    fireEvent.click(trigger)

    const content = await screen.findByText('Dimension')

    expect(content).toBeDefined()
  })

  it('should close on esc press', async () => {
    const content = await screen.findByText('Dimension')

    fireEvent.keyDown(content, { key: 'Escape', code: 'Escape' })

    expect(screen.queryByText('Dimension')).toBeNull()
  })
})
