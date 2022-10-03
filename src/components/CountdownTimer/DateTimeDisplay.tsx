import React from 'react'

type Props = { 
  value: number
  type: string
  isDanger: boolean
}
const DateTimeDisplay = (props: Props) => {
  return (
    <div className={props.isDanger ? 'countdown danger' : 'countdown'}>
      <p>{props.value}</p>
      <span>{props.type}</span>
    </div>
  )
}

export default DateTimeDisplay
