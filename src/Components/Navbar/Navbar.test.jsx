import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar component correctly", () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});
