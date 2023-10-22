import { useCart } from "../hocks/useCart";
import { RemoveCartIcon, CartIcon } from "./Icons";
import { useId } from "react";
import { Link } from "react-router-dom";

export function ProductCart() {
  const {
    productsCart,
    removeToCart,
    removeAllToCart,
    addToCart,
    subtractQuantity,
  } = useCart();

  return (
    <ul className="cart">
      <button className="remove_all_cart_button" onClick={removeAllToCart}>
        Eliminar todos
      </button>
      {productsCart.slice(0, 2).map((product) => {
        return (
          <li className="product_cart" key={product.id}>
            <img className="product_img carts" src={product.thumbnail} alt="" />
            <div className="info_container">
              <p className="product_title carts">{product.title}</p>
              <button
                className="remove_cart_icon"
                onClick={() => removeToCart(product)}
              >
                <RemoveCartIcon />
              </button>
              <div className="quantity-container">
                <button
                  className="quantity-button"
                  onClick={() => subtractQuantity(product)}
                >
                  -
                </button>
                <p className="quantity">Quantity: {product.quantity}</p>
                <button
                  className="quantity-button"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </li>
        );
      })}
      {productsCart.length > 2 && (
        <Link className="link" to="/Cart">
          <p>Ver todos los productos...</p>
        </Link>
      )}
    </ul>
  );
}

export function Cart() {
  const { productsCart } = useCart();
  const inputCart = useId();
  const isProductsCartEmpty = productsCart.length === 0;

  return (
    <>
      <label className="cart_icon_button" htmlFor={inputCart}>
        <CartIcon />
      </label>
      <input type="checkbox" id={inputCart} hidden />

      {isProductsCartEmpty ? (
        <div className="cart_empty">
          <p>
            El carrito se encuentra vacio, seleccione un producto para
            agregarlo.
          </p>
        </div>
      ) : (
        <ProductCart />
      )}
    </>
  );
}
