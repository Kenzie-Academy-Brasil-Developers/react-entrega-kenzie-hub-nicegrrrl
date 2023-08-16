import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/routesMain";
import "./styles/index.scss";
import { useUserContext } from "./providers/userContext/userContext";
import { Loading } from "./components/Loading/loading";

const App = () => {
  const { loadingPage } = useUserContext();

  return (
    <>
      {loadingPage ? <Loading /> : <RoutesMain />}

      <ToastContainer autoClose={3000} theme="dark" />
    </>
  );
};

export default App;
