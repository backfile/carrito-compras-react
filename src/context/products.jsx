import { createContext, useState, useEffect } from "react";


export const ProductsContext = createContext();

export function ProductsProvider({ children }) {

  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const getLocalStorage = localStorage.getItem("products");
    if (!getLocalStorage) return;

    const item = JSON.parse(getLocalStorage);
    setProductsCart(item);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem("products", JSON.stringify(newItem));
  };

  return (
    <ProductsContext.Provider
      value={{productsCart, setProductsCart, saveItem }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
