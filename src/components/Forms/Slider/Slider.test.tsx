import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { VolumeSlider } from './implementations/VolumeSlider'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Slider component', () => {
  const { container } = render(<VolumeSlider />)

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByLabelText('Volume')).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should set value to min when pressing Home', async () => {
    await user.keyboard('[Tab]')
    await user.keyboard('[Home]')

    const slider = screen.getByRole('slider')

    expect(slider.getAttribute('aria-valuenow')).toEqual(
      slider.getAttribute('aria-valuemin'),
    )
  })

  it('should set value to max when pressing End', async () => {
    await user.keyboard('[End]')

    const slider = screen.getByRole('slider')

    expect(slider.getAttribute('aria-valuenow')).toEqual(
      slider.getAttribute('aria-valuemax'),
    )
  })

  it('should decrease the value when pressing ArrowLeft', async () => {
    await user.keyboard('[ArrowLeft]')

    const slider = screen.getByRole('slider')

    expect(Number(slider.getAttribute('aria-valuenow'))).toBeLessThan(
      Number(slider.getAttribute('aria-valuemax')),
    )
  })

  it('should increase the value when pressing ArrowRight', async () => {
    await user.keyboard('[ArrowRight]')

    const slider = screen.getByRole('slider')

    expect(Number(slider.getAttribute('aria-valuenow'))).toEqual(
      Number(slider.getAttribute('aria-valuemax')),
    )
  })
})
