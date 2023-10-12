import products from "./mocks/products.json"
import { Filter } from "./components/Filter";
import "./App.css"
import { useFilter } from "./hocks/useFilter";
import { Products } from "./components/Products";


function App() {
  const {filters, setFilters, filterProducts} = useFilter()

  const listOfProducts = products.products
  const filteredProducts = filterProducts(listOfProducts)

  return (
    <>
      <header>
        <Filter filters={filters} setFilters={setFilters} />
      </header>
      <main>
        <Products filteredProducts={filteredProducts} />
      </main>
    </>
  );
}

export default App
