import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import Title from "../components/Title";

describe('Title component"', () => {
  beforeAll(() => {
    render(<Title />);
  });

  it("should have the right message in the dom", () => {
    const message = "React18 Typescript webpack 5";

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
