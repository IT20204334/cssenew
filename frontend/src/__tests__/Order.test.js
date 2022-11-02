import { render, screen } from "@testing-library/react";
import View from "../Pages/View";
import SingleOrder from '../Pages/SingleOrder';

test("renders order header", () => {
  render(<View />);
  const linkElement = screen.getByText(/Orders/i);
  expect(linkElement).toBeInTheDocument();
});

test("render orders table", () => {
  render(<View />);
  const linkElement = screen.getByTestId("ordersTable");
  expect(linkElement).toBeInTheDocument();
});

test("render accept button", () => {
  render(<SingleOrder />);
  const linkElement = screen.getByRole("button",{name:"Accept"});
  expect(linkElement).toBeInTheDocument();
});

test("render decline button", () => {
  render(<SingleOrder />);
  const linkElement = screen.getByRole("button",{name:"Decline"});
  expect(linkElement).toBeInTheDocument();
});

test("render order modal", () => {
  render(<SingleOrder />);
  const linkElement = screen.getByTitle("Decline Reason");
  expect(linkElement).toBeInTheDocument();
});

test("render order card", () => {
  render(<SingleOrder />);
  const linkElement = screen.getByTitle("View Single Order");
  expect(linkElement).toBeInTheDocument();
});

test("render order decline reason", () => {
  render(<SingleOrder />);
  const linkElement = screen.findByText(/Reason/i);
  expect(linkElement).toBeInTheDocument();
});

test("render order decline reason", () => {
  render(<SingleOrder />);
  const linkElement = screen.findByText(/Insufficient Budget/i);
  expect(linkElement).toBeInTheDocument();
});

test("render order decline reason", () => {
  render(<SingleOrder />);
  const linkElement = screen.findByText(/Invalid Materials/i);
  expect(linkElement).toBeInTheDocument();
});

test("render order decline reason", () => {
  render(<SingleOrder />);
  const linkElement = screen.findByText(/Unnecessary Materials/i);
  expect(linkElement).toBeInTheDocument();
});

test("render order decline reason", () => {
  render(<SingleOrder />);
  const linkElement = screen.findByText(/Quotation Issues/i);
  expect(linkElement).toBeInTheDocument();
});

test("render buttons", () => {
  render(<SingleOrder />);
  const linkElement = screen.getAllByRole("button");
  expect(linkElement.length).toBe(2);
});

