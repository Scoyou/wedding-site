import { render, screen } from "@testing-library/react";
import Header from "./index.jsx";

const defaults = {
  intro: "loren ipsum dolar",
  title: "test heading",
  subTitle: "subtitle",
  content: "content",
};

describe("countdown timer", () => {
  beforeEach(() => {
    render(<Header {...defaults} />)
  })

  it("renders intro", () => {
    expect(
      screen.getByText(defaults.intro)
    ).toBeInTheDocument();
  });

  it("renders title", () => {
    expect(
      screen.getByRole("heading", { name: defaults.title })
    ).toBeInTheDocument();
  });

  it("renders subTitle", () => {
    expect(
      screen.getByRole("heading", { name: defaults.subTitle })
    ).toBeInTheDocument();
  });

  it("renders content", () => {
    expect(
      screen.getByText( defaults.content)
    ).toBeInTheDocument();
  });
});
