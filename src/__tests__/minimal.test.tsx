import React from "react";
import { render } from "@testing-library/react";

test("renders without crashing", () => {
  render(<div>Hello, Jest!</div>);
});
