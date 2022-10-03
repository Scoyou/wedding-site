import {render, screen} from '@testing-library/react'
import RegistrySection from "./index.jsx"


describe('countdown timer', () => {
  beforeEach(() => {
    render(<RegistrySection />)
  })

  it('renders', () => {
    expect(
      screen.getByText("View Registry")
    ).toBeInTheDocument()
  })

})
