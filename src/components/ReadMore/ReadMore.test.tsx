import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReadMore } from './index'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

describe('Read More component', () => {
  const { container } = render(
    <ReadMore
      data-testid="readmore-test"
      id="readmore-test"
      text="very long long long long sentence"
      amountOfWords={2}
    />,
  )

  console.log(screen.getByTestId('readmore-test'))

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByTestId('readmore-test')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('does not show endText on mount', () => {
    const endTextElement = screen.getByText(/sentence/)
    expect(endTextElement).toHaveAttribute('aria-hidden', 'true')
  })

  it('does show endText after clicking the button', async () => {
    const endTextElement = screen.getByText(/sentence/)
    const button = screen.getByRole('button')

    await user.click(button)
    expect(endTextElement).toHaveAttribute('aria-hidden', 'false')
  })
})
