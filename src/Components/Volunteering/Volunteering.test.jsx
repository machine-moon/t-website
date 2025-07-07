import { test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Volenteering from "./Volunteering";

test("renders Projects component correctly", () => {
  const { asFragment } = render(<Volenteering />);
  expect(asFragment()).toMatchSnapshot();
});
