import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Main from "../components/Main";
import store from "../redux/store";

jest.mock("../components/styles/Main.styled", () => ({
  StyledMain: ({ children }) => <div>{children}</div>,
}));

describe("Main component", () => {
  test("should render an unordered list", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const unorderedList = screen.getByRole("list");
    expect(unorderedList).toBeInTheDocument();
  });

  test("should render two buttons for page navigation", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const pagesButtons = screen.getAllByRole("button");
    expect(pagesButtons).toHaveLength(2);
  });
});
