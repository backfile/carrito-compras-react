import { useCart } from "../hocks/useCart"
import { RemoveCartIcon} from "./Icons";

export function ProductFullCart(){
     const { productsCart, removeToCart, subtractQuantity, addToCart } = useCart()

     return productsCart.map((product) => (
       <li className="product" key={product.id}>
         <img className="product_img" src={product.thumbnail} alt="" />
         <div className="info_container">
           <p className="product_title">{product.title}</p>
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
             <p className="quantity fullcart">Quantity: {product.quantity}</p>
             <button
               className="quantity-button"
               onClick={() => addToCart(product)}
             >
               +
             </button>
           </div>
         </div>
       </li>
     ));
    }