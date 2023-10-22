import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/products";


export function useCart(){
     const { productsCart, setProductsCart, saveItem } = useContext(ProductsContext)

     const checkIsOnCart = (product) => {
        let newArray = [...productsCart];
        return (newArray.some((p) => p.id === product.id));
     }

     const addToCart = (product) => {
          const isOnCart = checkIsOnCart(product)
          
          if (isOnCart){
            let newArray = [...productsCart];
            const index = newArray.findIndex((pro) => pro.id === product.id);
            newArray[index].quantity += 1
            setProductsCart(newArray)
            saveItem(newArray)
            return
          }

          setProductsCart((prevState) => {
            const newArray = [
              ...prevState,
              {
                ...product,
                quantity: 1
              }
            ]
            saveItem(newArray)
            return newArray
          }
        )}

    const subtractQuantity = (product) =>{
       let newArray = [...productsCart];
       const index = newArray.findIndex((pro) => pro.id === product.id);
       if(newArray[index].quantity > 1){
        newArray[index].quantity -= 1;  
        setProductsCart(newArray);
        saveItem(newArray)
       } 
    }
       
     const removeToCart = (product) => {
       let array = [...productsCart];
       const newArray = array.filter((pro)=> pro.id != product.id)
       setProductsCart(newArray);
       saveItem(newArray)
     };

      const removeAllToCart = () => {
        setProductsCart([]);
        saveItem([])
     };

     return {productsCart, setProductsCart, addToCart, removeToCart, checkIsOnCart, removeAllToCart, subtractQuantity}


}