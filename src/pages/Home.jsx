import React from 'react';
import Header from '../components/Header'
import CountdownTimer from '../components/CountdownTimer'


const Home = () => {
  const EVENT_DATE = new Date("October 13, 2023 15:00:00:000")

  return(
    <div>
      <Header />
      <CountdownTimer targetDate={EVENT_DATE} title="The big day"/>
    </div>
  )
}

export default Home