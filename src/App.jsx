import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/routesMain";
import "./styles/index.scss";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
