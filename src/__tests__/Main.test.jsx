import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Main from "../components/Main";
import store from "../redux/store";
import { createServer } from "../__tests__/server";

createServer([
  {
    path: "/api/users",
    res: (req) => {
      return {
        listUsers: [
          { id: 1, first_name: "userOne" },
          { id: 2, first_name: "userTwo" },
          { id: 3, first_name: "userThree" },
          { id: 4, first_name: "userFour" },
          { id: 5, first_name: "userFive" },
          { id: 6, first_name: "userSix" },
          { id: 7, first_name: "userSeven" },
          { id: 8, first_name: "userEight" },
          { id: 9, first_name: "userNine" },
          { id: 10, first_name: "userTen" },
          { id: 11, first_name: "userEleven" },
          { id: 12, first_name: "userTwelve" },
        ],
      };
    },
  },
]);

jest.mock("../components/styles/Main.styled", () => ({
  StyledMain: ({ children }) => <div>{children}</div>,
}));

test("should render a list of card components", async () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

  const userCard = screen.getByTestId("user-card");
  expect(userCard).toBeInTheDocument();
});
