import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext/userContext";

export const ProtectedRoutes = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
};
