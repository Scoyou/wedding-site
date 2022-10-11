import React from 'react'
import './index.css'
import FaqCard from '../../components/FaqCard'
import SectionHeader from '../../components/SectionHeader'

const FaqPage = () => {
  const SHOW_ANSWERS = true
  return (
    <div id="faq-page">
      <SectionHeader title="Frequently Asked Questions" />
      <FaqCard
        question="Where is the event located?"
        displayAnswer={SHOW_ANSWERS}
      >
        <p>
          The ceremony and reception will be held at East Canyon Resort in
          Morgan, UT.
        </p>
      </FaqCard>
      <FaqCard question="What are the hours?" displayAnswer={SHOW_ANSWERS}>
        <p>
          The event will begin at 3PM MST and end at 8PM MST. Individual time
          details for the ceremony and reception will be released closer to the
          event.
        </p>
      </FaqCard>
      <FaqCard question="Can I bring my dog?" displayAnswer={SHOW_ANSWERS}>
        <p>
          Dogs are allowed at the venue, but cannot go inside any of the
          buildings or be on any of the patios. It would be best to leave your
          furry friends at home whenever possible. If you need to bring your dog
          they must remain outside and supervised at all times.
        </p>
      </FaqCard>
      <FaqCard
        question="Am I allowed to bring a plus one?"
        displayAnswer={SHOW_ANSWERS}
      >
        <p>Yes!</p>
      </FaqCard>
      <FaqCard question="Will there be alcohol?" displayAnswer={SHOW_ANSWERS}>
        <p>
          The event will be Bring Your Own Booze. If you plan on bringing
          alocohol please make sure it is labeled with your name so we know
          whose it is. All alcohol must be checked into the bar and served only
          by the bar tender on-site.
        </p>
      </FaqCard>
      <FaqCard question="Will there be food?" displayAnswer={SHOW_ANSWERS}>
        <p>
          Yes, food will be provided during the reception. The menu is TBD.
          Please let us know if you have any dietary restrictions in the RSVP
          form.
        </p>
      </FaqCard>
    </div>
  )
}

export default FaqPage
