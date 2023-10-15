import { useState } from "react";

export function useProductCart(filteredProducts){
     const [productsCart, setProductsCart] = useState([]);

     const checkIsOnCart = (id) => {
        let array = [...productsCart];
        return (array.some((p) => p.id === id));
     }

     const addToCart = (id) => {
          let array = [...productsCart];
          const newProducts = [...filteredProducts];
          const punter = newProducts.findIndex((pro) => pro.id === id);
          const productSearched = newProducts[punter];
          array.push(productSearched);
          setProductsCart(array);
       } 
       

     const removeToCart = (id) => {
       let array = [...productsCart];
       const punter = array.findIndex((pro) => pro.id === id);
       array.splice(punter, 1);
       setProductsCart(array);
     };

     return {productsCart, setProductsCart, addToCart, removeToCart, checkIsOnCart}


}