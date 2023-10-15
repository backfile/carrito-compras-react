import {products as initialProducts}from "./mocks/products.json"
import { Filter } from "./components/Filter";
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import { ProductsCart } from "./components/ProductsCart";
import { useProductCart } from "./hocks/useProductCart"
import "./App.css";


function App() {
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(initialProducts);
  const {productsCart, addToCart, removeToCart, checkIsOnCart} = useProductCart(filteredProducts)


  return (
    <>
      <header className="header">
        <Filter />
      </header>
      <main>
        <Products
          addToCart={addToCart}
          filteredProducts={filteredProducts}
          checkIsOnCart={checkIsOnCart}
          removeToCart={removeToCart}
        />
        {productsCart[0] && (
          <ProductsCart
            productsCart={productsCart}
            removeToCart={removeToCart}
          />
        )}
      </main>
    </>
  );
}

export default App
