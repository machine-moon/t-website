import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Contact from "./Contact";

test("renders Contact component correctly", () => {
  const { asFragment } = render(<Contact />);
  expect(asFragment()).toMatchSnapshot();
});
