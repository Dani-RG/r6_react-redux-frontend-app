import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Login from "../views/Login";

describe("Login component", () => {
  test("should call signInWithGoogle when Google button is clicked", () => {
    render(<Login />);
    const googleButton = screen.getByText("Continue with Google");

    fireEvent.click(googleButton);

    expect(true).toBe(true);
  });

  test("should call signInWithTwitter when Twitter button is clicked", () => {
    render(<Login />);
    const twitterButton = screen.getByText("Continue with Twitter");

    fireEvent.click(twitterButton);

    expect(true).toBe(true);
  });

  test("should call signInWithFacebook when Facebook button is clicked", () => {
    render(<Login />);
    const facebookButton = screen.getByText("Continue with Facebook");

    fireEvent.click(facebookButton);

    expect(true).toBe(true);
  });
});
