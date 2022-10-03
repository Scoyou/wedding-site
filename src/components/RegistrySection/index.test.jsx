import { render, screen } from '@testing-library/react'
import RegistrySection from './index.jsx'

describe('registry section', () => {
  beforeEach(() => {
    render(<RegistrySection />)
  })

  it('renders', () => {
    expect(screen.getByText('View Registry')).toBeInTheDocument()
  })

  it('links to registry', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      process.env.REACT_APP_REGISTRY_HREF,
    )
  })
})
