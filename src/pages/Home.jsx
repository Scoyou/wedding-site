import React from 'react'
import Header from '../components/Header'
import CountdownTimer from '../components/CountdownTimer'
import RsvpForm from '../components/RsvpForm'
import QuoteContainer from '../components/QuoteContainer'
import RegistrySection from '../components/RegistrySection'

const Home = () => {
  const EVENT_DATE = new Date(process.env.REACT_APP_EVENT_DATE)

  return (
    <div id="home">
      <Header
        intro="Come celebrate the union of:"
        title="Scott Young & Alisia Harry"
        subTitle={EVENT_DATE.toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
        content={
          <>
            <h3>Morgan, UT</h3>
            {new Date() < EVENT_DATE && (
              <button
                className="rsvp-button"
                onClick={() => window.location.replace('/#rsvp')}
              >
                RSVP
              </button>
            )}
          </>
        }
      />
      <CountdownTimer
        targetDate={EVENT_DATE}
        title="The big day"
        content="We're so excited to see you at our wedding! We can't think of a
            better way to start our new journey than with all of you!"
      />
      <QuoteContainer />
      <RegistrySection />
      <RsvpForm eventDate={EVENT_DATE} />
    </div>
  )
}

export default Home
