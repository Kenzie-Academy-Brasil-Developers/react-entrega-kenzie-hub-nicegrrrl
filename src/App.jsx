import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/routesMain";
import "./styles/index.scss";
import { Loading } from "./components/Loading/loading";
import { useUserContext } from "./providers/UserContext/userContext.jsx";

const App = () => {
  const { loadingPage } = useUserContext();

  return <>{loadingPage ? <Loading /> : <RoutesMain />}</>;
};

export default App;
