import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/loginPage";
import { RegisterPage } from "../pages/RegisterPage/registerPage";
import { DashboardPage } from "../pages/DashboardPage/dashboardPage";
import { ErrorPage } from "../pages/ErrorPage/errorPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
