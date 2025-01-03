import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("renders Footer component correctly", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
