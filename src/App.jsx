import products from "./mocks/products.json"
import { Filter } from "./components/Filter";
import "./App.css"
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    category: "All",
    minPrice: "0"
  })

  const listOfProducts = products.products

  const filterProducts = (products) => {
    return products.filter((product)=>{
      return (
        product.price >= filters.minPrice && (
          filters.category === "All" 
          || 
          filters.category === product.category
        )
      )  
    })
  }

  const filteredProducts = filterProducts(listOfProducts)

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters}/>
      <main>
        <ul className="products">
          {filteredProducts.map((product) => {
            return (
              <li key={product.id}>
                <h1>{product.title}</h1>
                <img className="product_img" src={product.thumbnail} alt="" />
                <p>${product.price}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App
