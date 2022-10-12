import React from 'react'
import './index.css'
import FaqCard from '../../components/FaqCard'
import SectionHeader from '../../components/SectionHeader'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const FaqPage = () => {
  const { width } = useWindowDimensions()

  const SHOW_ANSWERS = width > 600
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
      <FaqCard question="How can I RSVP?" displayAnswer={SHOW_ANSWERS}>
        <p>
          Filling out the form at the bottom of the home page is the preferred
          way to RSVP. Doing so will let us know you can make it, as well as
          send a calendar reminder to the email you use. If you'd rather RSVP
          another way you can text either Alisia or Scott to let us know you're
          coming, or email us at rsvp@scottandalisia.com.
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
      <FaqCard question="Can I bring a plus one?" displayAnswer={SHOW_ANSWERS}>
        <p>
          Yes! Anyone coming solo is welcome to bring a plus one. Please just
          let us know who is coming when filling out the RSVP form so we can
          have an accurate head-count for food.
        </p>
      </FaqCard>
      <FaqCard question="Will there be alcohol?" displayAnswer={SHOW_ANSWERS}>
        <p>
          The event will be Bring Your Own Booze. If you plan on bringing
          alcohol please make sure it is labeled with your name so we know whose
          it is. Due to Utah state liquor laws all alcohol must be checked into
          the bar upon arrival and served only by the bar tender on-site.
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
