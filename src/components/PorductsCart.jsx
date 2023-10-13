export function ProductsCart({productsCart, removeToCart}){
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
                <button onClick={() => removeToCart(product.id)}>Eliminar del carrito</button>
              </li>
            );
          })}
        </ul>
      </>
    );
}