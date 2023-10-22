import { ProductFullCart } from "../components/ProductFullCart";
import { useCart } from "../hocks/useCart";
import { Link } from "react-router-dom";

export function FullCart() {
  const { productsCart } = useCart();

  return (
    <>
      <header>
        <nav className="fullcart-nav">
          <h1 className="fullcart-title">Carrito 🛒</h1>
          <Link className="link" to="/">
            Home
          </Link>
        </nav>
      </header>
      <main>
        <ul className="products fullcart">
          {productsCart.length ? <ProductFullCart /> : <p>Carrito vacio</p>}
        </ul>
      </main>
    </>
  );
}
