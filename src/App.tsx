import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import { initializeApp } from "firebase/app";
import { config } from "./config/firebaseConfig";
import AuthRoute from "./components/AuthRoute";
import Navbar from "./components/Navbar";

initializeApp(config.firebaseConfig);

const App: React.FunctionComponent = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
};

export default App;
