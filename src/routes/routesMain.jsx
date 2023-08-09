import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/loginPage";
import { RegisterPage } from "../pages/RegisterPage/registerPage";
import { DashboardPage } from "../pages/DashboardPage/dashboardPage";
import { useState } from "react";

export const RoutesMain = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} setUser={setUser} />}
      />
    </Routes>
  );
};
