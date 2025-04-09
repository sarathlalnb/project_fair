import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ContextApi from "./contexts/ContextApi.jsx";
import AuthContext from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext> 
        <ContextApi>
          <App />
        </ContextApi>
      </AuthContext> 
    </BrowserRouter>
  </StrictMode>
);
