import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/rootReducer";
import usersSaga from "../redux/usersSaga";
import createSagaMiddleware from "@redux-saga/core";
import Home from "../views/Home";

jest.mock("../images/default_user.jpeg", () => "mocked-image");

jest.mock("../components/styles/Main.styled", () => ({
  StyledMain: ({ children }) => <div>{children}</div>,
}));

test("should render the main component", () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware],
  });

  sagaMiddleware.run(usersSaga);

  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const mainComp = screen.getByTestId("main-comp");
  expect(mainComp).toBeInTheDocument();
});
