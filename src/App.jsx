import products from "./mocks/products.json"
import { Filter } from "./components/Filter";
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import { ProductsCart } from "./components/ProductsCart";
import { useProductCart } from "./hocks/useProductCart"
import "./App.css";


function App() {
  const {filterProducts} = useFilter()
  const listOfProducts = products.products;
  const filteredProducts = filterProducts(listOfProducts);
  const {productsCart, addToCart, removeToCart} = useProductCart(filteredProducts)


  return (
    <>
      <header className="header">
        <Filter />
      </header>
      <main>
        <Products addToCart={addToCart} filteredProducts={filteredProducts} />
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
