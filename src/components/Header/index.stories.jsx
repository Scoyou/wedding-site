import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./index";

storiesOf("Header", module).add("Header", () => {
  return <Header eventDate={new Date("October 13, 2023 15:00:00:000")} />;
});
