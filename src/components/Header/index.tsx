import React, { ReactNode } from 'react'
import './index.css'

export type Props = {
  intro: ReactNode
  title: ReactNode
  subTitle: ReactNode
  content: ReactNode
}

const Header = (props: Props) => {
  const { intro, title, subTitle, content } = props

  return (
    <div className="header">
      <div className="center">
        {intro && <span>{intro}</span>}
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subTitle}</h2>
        {content}
      </div>
    </div>
  )
}

export default Header
