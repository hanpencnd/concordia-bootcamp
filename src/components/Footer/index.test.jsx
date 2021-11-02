import { render, screen } from "@testing-library/react";
import Footer from "./index";

test("renders logo", () => {
  render(<Footer />);

  screen.getByTestId("logo");
});

test("renders copyright", () => {
  render(<Footer />);

  screen.getByText("Dialogue © 2021");
});
