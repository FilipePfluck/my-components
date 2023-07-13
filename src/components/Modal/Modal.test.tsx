import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Dialog, DialogRoot, DialogTrigger } from './index'
import { Button } from '@/components/Button'

describe('Dialog component', () => {
  render(
    <DialogRoot>
      <DialogTrigger asChild data-testid="Dialog-trigger">
        <Button intent="primary" size="md">
          Open the modal
        </Button>
      </DialogTrigger>
      <Dialog title="This is a title" description="this is a description">
        <p data-testid="Dialog-content">Hello world</p>
      </Dialog>
    </DialogRoot>,
  )

  it('renders the trigger', () => {
    expect(screen.getByText(/Open the modal/i)).toBeDefined()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText('Hello world')).toBeNull()
  })

  it('should show the content after clicking on the trigger', async () => {
    const trigger = screen.getByTestId('Dialog-trigger')
    fireEvent.click(trigger)

    const content = await screen.findByText('Hello world')

    expect(content).toBeDefined()
  })

  it('should close on esc press', () => {
    const DialogContent = screen.getByTestId('Dialog-content')

    fireEvent.keyDown(DialogContent, { key: 'Escape', code: 'Escape' })

    expect(screen.queryByText('Hello world')).toBeNull()
  })
})
