import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { RoutesMain } from "./routes/routesMain";

function App() {
  return (
    <>
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;