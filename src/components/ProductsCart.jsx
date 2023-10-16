import { useProductCart } from "../hocks/useProductCart";
import { RemoveCartIcon, CartIcon } from "./Icons";
import { useId } from "react";


export function ProductsCart({ filteredProducts }) {
  const { productsCart, removeToCart } = useProductCart(filteredProducts);
  const inputCart = useId()

  return (
    <>
      <label className="cart_icon_button" htmlFor={inputCart}>
        <CartIcon/>
      </label>
      <input type="checkbox" id={inputCart} hidden/>

      <ul className="cart">
        {productsCart.map((product) => {
          return (
            <li key={product.id}>
              <p className="product_title">{product.title}</p>
              <img className="product_img" src={product.thumbnail} alt="" />
              <p className="product_price">${product.price}</p>
              <button
                className="remove_cart_icon"
                onClick={() => removeToCart(product.id)}
              >
                <RemoveCartIcon />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}