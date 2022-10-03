import React from 'react'
import './index.css'

type Props = { title: string }

const SectionHeader = (props: Props) => {
  return <h2 className="section-header">{props.title}</h2>
}

export default SectionHeader
