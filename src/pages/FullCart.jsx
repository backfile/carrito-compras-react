import { ProductFullCart } from "../components/ProductFullCart";

export function FullCart(){
    return (
      <>
        <header>
          <h1 className="fullcart-title">Carrito</h1>
        </header>
        <main>
          <ul className="products fullcart">
            <ProductFullCart />
          </ul>
        </main>
      </>
    );
}