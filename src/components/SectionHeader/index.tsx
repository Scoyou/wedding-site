import React from 'react'
import './index.css'

type Props = { title: string }

const SectionHeader = (props: Props) => {
  return <h1 className="section-header">{props.title}</h1>
}

export default SectionHeader
