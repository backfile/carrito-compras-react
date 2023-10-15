import { createContext, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  return (
    <ProductsContext.Provider
      value={{productsCart, setProductsCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
