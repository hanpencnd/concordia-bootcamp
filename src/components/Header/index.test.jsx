import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders logo", () => {
  render(<Header />);

  screen.getByTestId("logo");
});
