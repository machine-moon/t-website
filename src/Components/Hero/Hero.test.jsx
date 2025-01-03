import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Hero from "./Hero";

test("renders Hero component correctly", () => {
  const { asFragment } = render(<Hero />);
  expect(asFragment()).toMatchSnapshot();
});
