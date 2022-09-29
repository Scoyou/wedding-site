import {render, screen} from '@testing-library/react'
import CountdownTimer from "./index.jsx"

const defaults = {
  targetDate: new Date("October 13, 2023 15:00:00:000"),
  title: 'The big day',
  content: 'loren ipsum dolar'
}


describe('countdown timer', () => {
  beforeEach(() => {
    render(<CountdownTimer {...defaults} />)
  })

  it('renders title', () => {
    expect(
      screen.getByRole('heading', {name: defaults.title})
    ).toBeInTheDocument()
  })

  it('renders content', () => {
    expect(
      screen.getByText(defaults.content)
    ).toBeInTheDocument()
  })
})
