import React, { useState } from "react";
import type { MenuTheme } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes";
import LayoutApp from "./components/layouts/LayoutApp";

function App() {
  const [themeLayout, setThemeLayout] = useState<MenuTheme>("dark");

  const changeTheme = (value: boolean) => {
    setThemeLayout(value ? "dark" : "light");
  };

  return (
    <Router>
      <LayoutApp theme={themeLayout} changeTheme={changeTheme}>
        <AppRoutes />
        <ToastContainer />
      </LayoutApp>
    </Router>
  );
}

export default App;
