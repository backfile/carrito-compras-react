import products from "./mocks/products.json"
import { Filter } from "./components/Filter";
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import { useState } from "react";
import { ProductsCart } from "./components/PorductsCart";
import "./App.css";


function App() {
  const {filterProducts} = useFilter()
  const [productsCart, setProductsCart] = useState([]);

  const listOfProducts = products.products;
  const filteredProducts = filterProducts(listOfProducts);

  const addToCart = (id) => {
    let array = [...productsCart];
    const newProducts = [...filteredProducts];
    const punter = newProducts.findIndex((pro) => pro.id === id);
    if(array.some((p)=> p.id === id)) return
    array.push(newProducts[punter]);
    setProductsCart(array);
  };

    const removeToCart = (id) => {
      let array = [...productsCart];
      const punter = array.findIndex((pro) => pro.id === id);
      // if (array.some((p) => p.id === id)) return;
      array.splice(punter, 1);
      setProductsCart(array);
    };

  return (
    <>
      <header className="header">
        <Filter />
      </header>
      <main>
        <Products filteredProducts={filteredProducts} addToCart={addToCart} />
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
