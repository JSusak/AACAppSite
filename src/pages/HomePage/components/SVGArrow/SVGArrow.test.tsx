import { render, screen } from "@testing-library/react";
import { SVGArrow } from "./SVGArrow";

describe("Arrow component", () => {
  it("should render SVG Arrow component correctly", () => {
    render(<SVGArrow iconSize="50px" />);
    const element = screen.getByRole("figure");
    expect(element).toBeInTheDocument();
  });
});
