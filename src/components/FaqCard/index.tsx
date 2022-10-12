import React, { useState, ReactNode } from 'react'
import './index.css'

type Props = {
  question: string
  children: ReactNode
  displayAnswer: boolean
}

const FaqCard = (props: Props) => {
  const [showAnswer, setShowAnswer] = useState(props.displayAnswer)
  return (
    <div className="faq-card">
      <h2 onClick={() => setShowAnswer(!showAnswer)} className="faq-question">
        ○ {props.question}
        <img
          style={{ margin: '10px', float: 'right' }}
          width="20"
          height="20"
          alt="expand arrow"
          src={
            showAnswer
              ? process.env.PUBLIC_URL + '/expand-icon-up.png'
              : process.env.PUBLIC_URL + '/expand-icon-down.png'
          }
        />
      </h2>
      <hr />
      {showAnswer && <div className="faq-answer">{props.children}</div>}
    </div>
  )
}

export default FaqCard
