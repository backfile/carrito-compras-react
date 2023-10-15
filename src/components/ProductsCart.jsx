import { useProductCart } from "../hocks/useProductCart";
import { RemoveCartIcon } from "./Icons";

export function ProductsCart({ filteredProducts }) {
  const { productsCart, removeToCart } = useProductCart(filteredProducts);

  return (
    <>
      <p>Carrito</p>
      <ul className="products">
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