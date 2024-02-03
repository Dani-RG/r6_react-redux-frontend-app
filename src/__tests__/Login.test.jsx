import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../views/Login";

jest.mock("../images/logo_Google.png", () => "mocked-image");
jest.mock("../images/logo_Twitter.png", () => "mocked-image");
jest.mock("../images/logo_Facebook.png", () => "mocked-image");
jest.mock("../images/r6_logo_colors.png", () => "mocked-image");

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  TwitterAuthProvider: jest.fn(),
  FacebookAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../components/styles/LoginView.styled", () => ({
  StyledLoginView: ({ children }) => <div>{children}</div>,
}));

jest.mock("../components/styles/LoginCard.styled", () => ({
  StyledLoginCard: ({ children }) => <div>{children}</div>,
}));

test("shows three buttons to authenticate user", async () => {
  render(<Login />);

  const buttons = await screen.findAllByRole("button");
  expect(buttons).toHaveLength(3);
});
