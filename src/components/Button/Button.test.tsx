import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './index'

describe('Button component', () => {
  it('renders correctly', () => {
    render(
      <Button intent="primary" size="md">
        Hello World
      </Button>,
    )

    expect(screen.getByText(/Hello World/i)).toBeDefined()
  })
})
