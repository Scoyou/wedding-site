import React from "react";
import { storiesOf } from "@storybook/react";
import QuoteContainer from "./index";

const QUOTE =
  "Did my heart love till now? Forswear it, sight, For I ne'er saw true beauty till this night.";

storiesOf("QuoteContainer", module).add("Quote Container", () => {
  return <QuoteContainer quote={QUOTE} author="William Shakespeare" />;
});
