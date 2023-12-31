import { useCart } from "../hocks/useCart";
import { AddCartIcon, RemoveCartIcon } from "./Icons";

export function Products({filteredProducts}){


    const {addToCart, checkIsOnCart, removeToCart} = useCart()

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
              <img className="product_img" src={product.thumbnail} alt="" />
              <div className="info_container">
                <p className="product_title">{product.title}</p>
                <p className="product_price">${product.price}</p>
                <button
                  className={isOnCart ? "remove_cart_icon" : "add_cart_icon"}
                  onClick={() => handleClick(product)}
                >
                  {isOnCart ? <RemoveCartIcon /> : <AddCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
}