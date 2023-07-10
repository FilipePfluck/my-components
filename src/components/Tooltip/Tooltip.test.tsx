import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Tooltip } from './index'
import { Provider } from '@radix-ui/react-tooltip'
import { Button } from '../Button'
import { axe } from 'vitest-axe'

describe('Button component', () => {
  const { container } = render(
    <Provider>
      <Tooltip message="This is a tooltip">
        <Button>Hello world</Button>
      </Tooltip>
    </Provider>,
  )

  it('renders the trigger and has no detectable a11y violation', async () => {
    expect(screen.getByText(/Hello World/i)).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('does not show the tooltip text by default', async () => {
    expect(screen.queryByText('This is a tooltip')).not.toBeInTheDocument()
  })
})
