import React from 'react'
import './index.css'

type Props = { title: string }

const SectionHeader = ({ title }) => {
  return <h2 className="section-header">{title}</h2>
}

export default SectionHeader
