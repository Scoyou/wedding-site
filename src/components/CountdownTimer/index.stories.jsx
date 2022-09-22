import React from "react";
import { storiesOf } from "@storybook/react";
import CountdownTimer from "./index";

const EVENT_DATE = new Date("October 13, 2023 15:00:00:000");

storiesOf("CountdownTimer", module).add("Countdown Timer", () => {
  return (
    <CountdownTimer
      targetDate={EVENT_DATE}
      title="The big day"
      content="We're so excited to see you at our wedding! We can't think of a
        better way to start our new journey than with all of you!"
    />
  );
});
