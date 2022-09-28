import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./index";


storiesOf("Modal", module).add("Modal", () => {
  return <Modal toEmail="test@example.com"/>;
});
