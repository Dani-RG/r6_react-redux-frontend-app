import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import { initializeApp } from "firebase/app";
import { config } from "./config/firebaseConfig";
import AuthRoute from "./components/AuthRoute";
import Navbar from "./components/Navbar";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import Sidebar from "./components/Sidebar";

initializeApp(config.firebaseConfig);

const App: React.FunctionComponent = (props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
