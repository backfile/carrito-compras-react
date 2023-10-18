import { useProductCart } from "../hocks/useProductCart";
import { AddCartIcon, RemoveCartIcon } from "./Icons";

export function Products({filteredProducts}){


    const {addToCart, checkIsOnCart, removeToCart} = useProductCart(filteredProducts)

    const handleClick = (product) =>{
      const isOnCart = checkIsOnCart(product)
      if (!isOnCart){
        addToCart(product)
      }else{
        removeToCart(product)
      }
    }

    return (
      <ul className="products">
        {filteredProducts.map((product) => {
          const isOnCart = checkIsOnCart(product)
          
          return (
            <li className="product" key={product.id}>
              <p className="product_title">{product.title}</p>
              <img className="product_img" src={product.thumbnail} alt="" />
              <p className="product_price">${product.price}</p>
              <button
                className={
                  isOnCart
                    ? "remove_cart_icon"
                    : "add_cart_icon"
                }
                onClick={() => handleClick(product)}
              >
                {isOnCart 
                  ? <RemoveCartIcon />
                  : <AddCartIcon />
                }
              </button>
            </li>
          );
        })}
      </ul>
    );
}