import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion } from './index'
import { axe } from 'vitest-axe'

const data = [
  {
    id: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    id: 'item-2',
    title: 'Is it styled?',
    content: 'Yes, it comes with beautifull styles by default.',
  },
]

describe('Accordion component', () => {
  const { container } = render(<Accordion type="single" items={data} />)

  it('renders the titles all the time', () => {
    expect(screen.getByText(/Is it accessible?/i)).toBeDefined()
  })

  it('has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should not show the content at the start', () => {
    expect(
      screen.queryByText('Yes. It adheres to the WAI-ARIA design pattern.'),
    ).toBeNull()
  })

  it('should show the content after clicking on the accordion', async () => {
    const trigger = screen.getByTestId('Accordion-trigger-item-1')
    fireEvent.click(trigger)

    const content = await screen.findByText(
      'Yes. It adheres to the WAI-ARIA design pattern.',
    )

    expect(content).toBeDefined()
  })
})
