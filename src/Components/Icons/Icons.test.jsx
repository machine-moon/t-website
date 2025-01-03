import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Icons from "./Icons";

test("renders Icons component correctly", () => {
  const { asFragment } = render(<Icons />);
  expect(asFragment()).toMatchSnapshot();
});
