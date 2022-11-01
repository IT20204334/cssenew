import "./App.css";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { RequestContextProvider } from "./Services/RequestContext";

function App() {
  return (
    <RequestContextProvider baseURL={`http://localhost:4002/api/`}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </RequestContextProvider>
  );
}

export default App;
