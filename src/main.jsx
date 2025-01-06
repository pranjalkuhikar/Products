import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Product from "./context/Product.jsx";

createRoot(document.getElementById("root")).render(
  <Product>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Product>
);
