import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav bar", () => {
  render(<App />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});
