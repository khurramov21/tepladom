import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProductContextProvider from "./context/ContextProvider.jsx";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
    <ToastContainer />
  </StrictMode>
);