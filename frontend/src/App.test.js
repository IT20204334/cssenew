import { render, screen } from "@testing-library/react";
import App from "./App";
import Navbar from './Components/navbar'

test("renders nav bar", () => {
  render(<App />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});

test("render home button", () => {
  render(<Navbar />);
  const linkElement = screen.getByRole("button",{name:"Home"});
  expect(linkElement).toBeInTheDocument();
});

test("render orders button", () => {
  render(<Navbar />);
  const linkElement = screen.getByRole("button",{name:"Order"});
  expect(linkElement).toBeInTheDocument();
});

test("render buttons", () => {
  render(<Navbar />);
  const linkElement = screen.getAllByRole("button");
  expect(linkElement.length).toBe(3);
});
