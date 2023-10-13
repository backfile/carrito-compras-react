export function Products({filteredProducts}){
    return (
      <ul className="products">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <p className="product_title">{product.title}</p>
              <img className="product_img" src={product.thumbnail} alt="" />
              <p className="product_price">${product.price}</p>
            </li>
          );
        })}
      </ul>
    );
}