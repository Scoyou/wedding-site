import React from 'react';
import Header from '../components/Header'
import CountdownTimer from '../components/CountdownTimer'
import RsvpForm from '../components/RsvpForm';


const Home = () => {
  const EVENT_DATE = new Date("October 13, 2023 15:00:00:000")

  return(
    <div id="home">
      <Header />
      <CountdownTimer targetDate={EVENT_DATE} title="The big day"/>
      <RsvpForm />
    </div>
  )
}

export default Home