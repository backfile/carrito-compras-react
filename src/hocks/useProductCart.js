import { useState } from "react";

export function useProductCart(filteredProducts){
     const [productsCart, setProductsCart] = useState([]);

     const addToCart = (id) => {
       let array = [...productsCart];
       const newProducts = [...filteredProducts];
       const punter = newProducts.findIndex((pro) => pro.id === id);
       if (array.some((p) => p.id === id)) return;
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

     return {productsCart, setProductsCart, addToCart, removeToCart}


}