import React from 'react';
import Header from '../components/Header'
import CountdownTimer from '../components/CountdownTimer'
import RsvpForm from '../components/RsvpForm';
import QuoteContainer from '../components/QuoteContainer';


const Home = () => {
  const EVENT_DATE = new Date("October 13, 2023 15:00:00:000")
  const QUOTE =
  "Did my heart love till now? Forswear it, sight, For I ne'er saw true beauty till this night.";

  return(
    <div id="home">
      <Header />
      <CountdownTimer targetDate={EVENT_DATE} title="The big day"/>
      <QuoteContainer quote={QUOTE} author="William Shakespeare"/>
      <RsvpForm />
    </div>
  )
}

export default Home