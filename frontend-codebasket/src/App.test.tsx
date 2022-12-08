import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders to match snapshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
