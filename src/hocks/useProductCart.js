import { useContext } from "react";
import { ProductsContext } from "../context/products";


export function useProductCart(filteredProducts){
     const { productsCart, setProductsCart } = useContext(ProductsContext)

     const checkIsOnCart = (product) => {
        let array = [...productsCart];
        return (array.some((p) => p.id === product.id));
     }


    const removeAllToCart = () => {
      setProductsCart([])
    }

     const addToCart = (product) => {
          setProductsCart((prevState) => {
           const array = [...prevState]
           array.push(product)
           return array
          });
       } 
       

     const removeToCart = (product) => {
       let array = [...productsCart];
       const newArray = array.filter((pro)=> pro.id != product.id)
       setProductsCart(newArray);
     };

     return {productsCart, setProductsCart, addToCart, removeToCart, checkIsOnCart, removeAllToCart}


}