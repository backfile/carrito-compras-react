import {products as initialProducts}from "../mocks/products.json"
import { useFilter } from "../hocks/useFilter";
import { Products } from "../components/Products";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";

export function Home() {
  const {filterProducts} = useFilter()
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <main>
        <Products filteredProducts={filteredProducts} />
        <Cart />
      </main>
    </>
  );
}