import {render, screen} from '@testing-library/react'
import SectionHeader from "./index.jsx"

const defaults = {
  title: 'Section Header'
}

describe('Section header', () => {
  beforeEach(() => {
    render(<SectionHeader {...defaults} />)
  })

  it('renders', () => {
    expect(
      screen.getByRole("heading", {name: defaults.title})
    ).toBeInTheDocument()
  })
})
