import "./App.css";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import { RequestContextProvider } from "./Services/RequestContext";
import Nav from "../src/Components/navbar";

function App() {
  return (
    <RequestContextProvider baseURL={`http://localhost:4002/api/`}>
      <BrowserRouter>
        <Nav data-testid="navbar" />
        <MainRoutes />
      </BrowserRouter>
    </RequestContextProvider>
  );
}

export default App;
