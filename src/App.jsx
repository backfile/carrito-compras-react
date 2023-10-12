import products from "./mocks/products.json"
import { Filter } from "./components/Filter";
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";
import "./App.css";


function App() {
  const {filterProducts} = useFilter()

  const listOfProducts = products.products
  const filteredProducts = filterProducts(listOfProducts)

  return (
    <>
      <header>
        <Filter/>
      </header>
      <main>
        <Products filteredProducts={filteredProducts} />
      </main>
    </>
  );
}

export default App
