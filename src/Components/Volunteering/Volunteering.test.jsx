import { render, screen } from "@testing-library/react";
import Volunteering from "./Volunteering";

describe("Volunteering Component", () => {
  test("renders volunteering section", () => {
    render(<Volunteering />);
    expect(screen.getByText("Volunteering Experience")).toBeInTheDocument();
  });

  test("renders all volunteering cards", () => {
    render(<Volunteering />);
    expect(screen.getByText("ML Undergraduate Researcher")).toBeInTheDocument();
    expect(screen.getByText("Carleton AI Society")).toBeInTheDocument();
    expect(screen.getByText("Webmaster at CUMSA")).toBeInTheDocument();
  });
});
