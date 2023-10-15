import { AddCartIcon, RemoveCartIcon } from "./Icons";

export function Products({addToCart, filteredProducts, checkIsOnCart, removeToCart}){

    const handleClick = (id) =>{
      const isOnCart = checkIsOnCart(id)
      if (!isOnCart){
        addToCart(id)
      }else{
        removeToCart(id)
      }
    }

    return (
      <ul className="products">
        {filteredProducts.map((product) => {
          return (
            <li key={product.id}>
              <p className="product_title">{product.title}</p>
              <img className="product_img" src={product.thumbnail} alt="" />
              <p className="product_price">${product.price}</p>
              <button
                className="AddCartIcon_container"
                onClick={() => handleClick(product.id)}
              >
                {checkIsOnCart(product.id) ? (
                  <RemoveCartIcon/>
                ) : (
                  <AddCartIcon />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    );
}