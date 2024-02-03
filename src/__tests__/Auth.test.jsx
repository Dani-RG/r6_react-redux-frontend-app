import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { signInWithPopup } from "firebase/auth";
import Login from "../views/Login";

jest.mock("firebase/auth");

jest.mock("../components/styles/LoginView.styled", () => ({
  StyledLoginView: ({ children }) => <div>{children}</div>,
}));

jest.mock("../components/styles/LoginCard.styled", () => ({
  StyledLoginCard: ({ children }) => <div>{children}</div>,
}));

test('should not navigate to "/" when user is not authenticated', async () => {
  signInWithPopup.mockReturnValue(new Promise(() => {}));

  render(
    <Router>
      <Login />
    </Router>
  );

  const signInButton = screen.getByText("Sign in");
  expect(signInButton).toBeInTheDocument();

  userEvent.click(signInButton);

  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

  expect(screen.getByTestId("login-view")).toBeInTheDocument();
  expect(screen.queryByTestId("home-view")).toBeNull();
});
