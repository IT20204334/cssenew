import { render, screen } from "@testing-library/react";
import View from "../Pages/View";

test("renders order header", () => {
  render(<Order />);
  const linkElement = screen.getByText("Orders");
  expect(linkElement).toBeInTheDocument();
});

test("render orders table", () => {
  render(<Order />);
  const linkElement = screen.getByTestId("ordersTable");
  expect(linkElement).toBeInTheDocument();
});
