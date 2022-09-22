import React from "react";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import RsvpForm from "../components/RsvpForm";
import QuoteContainer from "../components/QuoteContainer";
import RegistrySection from "../components/RegistrySection";

const Home = () => {
  const EVENT_DATE = new Date("October 13, 2023 15:00:00:000");
  const QUOTE =
    "Did my heart love till now? Forswear it, sight, For I ne'er saw true beauty till this night.";

  return (
    <div id="home">
      <Header eventDate={EVENT_DATE}/>
      <CountdownTimer
        targetDate={EVENT_DATE}
        title="The big day"
        content="We're so excited to see you at our wedding! We can't think of a
            better way to start our new journey than with all of you!"
      />
      <QuoteContainer quote={QUOTE} author="William Shakespeare" />
      <RegistrySection />
      <RsvpForm eventDate={EVENT_DATE}/>
    </div>
  );
};

export default Home;
