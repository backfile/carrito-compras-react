import {products as initialProducts}from "./mocks/products.json"
import { Filter } from "./components/Filter";
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import { ProductsCart } from "./components/ProductsCart";
import { useProductCart } from "./hocks/useProductCart"
import { ProductsProvider } from "./context/products";
import "./App.css";


function App() {
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(initialProducts);



  return (
    <ProductsProvider>
      <header className="header">
        <Filter />
      </header>
      <main>
        <Products filteredProducts={filteredProducts} />
        <ProductsCart filteredProducts={filteredProducts} />
      
      </main>
    </ProductsProvider>
  );
}

export default App
