import { useProductCart } from "../hocks/useProductCart";
import { RemoveCartIcon, CartIcon } from "./Icons";
import { useId } from "react";


export function ProductsCart({ filteredProducts }) {
  const { productsCart, removeToCart, removeAllToCart } = useProductCart(filteredProducts);
  const inputCart = useId()
  const isProductsCartEmpty = productsCart.length === 0

  return (
    <>
      <label className="cart_icon_button" htmlFor={inputCart}>
        <CartIcon />
      </label>
      <input type="checkbox" id={inputCart} hidden />

      <ul className="cart">
        {isProductsCartEmpty ? (
          <div className="cart_empty">
            <p>El carrito se encuentra vacio, seleccione un producto para agregarlo.</p>
          </div>
        ) : (
          <>
            <button onClick={removeAllToCart}>Eliminar todos</button>
            {productsCart.map((product) => {
            return (
              <li className="product_cart" key={product.id}>
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
          </>
        )}
      </ul>
    </>
  );
}