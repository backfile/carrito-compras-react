import {products as initialProducts}from "./mocks/products.json"
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import { ProductsCart } from "./components/ProductsCart";
import { ProductsProvider } from "./context/products";
import "./App.css";
import { Header } from "./components/Header";


function App() {
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(initialProducts);


  return (
    <ProductsProvider>
      <Header/>
      <main>
        <Products filteredProducts={filteredProducts} />
        <ProductsCart filteredProducts={filteredProducts} />
      </main>
    </ProductsProvider>
  );
}

export default App
