import { ProductsProvider } from "./context/products";
import { FiltersProvider } from "./context/filters.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullCart } from "./pages/FullCart";
import { Home } from "./pages/Home";

function App() {
  return (
    <FiltersProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<FullCart />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </FiltersProvider>
  );
}
export default App;
