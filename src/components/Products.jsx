export function Products({filteredProducts}){
    return (
      <ul className="products">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <h1>{product.title}</h1>
              <img className="product_img" src={product.thumbnail} alt="" />
              <p>${product.price}</p>
            </li>
          );
        })}
      </ul>
    );
}