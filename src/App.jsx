import { ProductsProvider } from "./context/products";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullCart } from "./pages/FullCart";
import { Home } from "./pages/Home";


function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<FullCart/>} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
  
}

export default App
