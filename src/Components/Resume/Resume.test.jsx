import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Resume from "./Resume";

test("renders Resume component correctly", () => {
  const { asFragment } = render(<Resume />);
  expect(asFragment()).toMatchSnapshot();
});
