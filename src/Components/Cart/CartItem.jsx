import { handleQuantityChange } from "../utilities/handleChanges";
import "./CartItem.css";

const CartItem = ({
  item,
  index,
  setCartItems,
  showDescription,
  setShowDetails,
}) => {
  const { name, price, quantity, description, inventory } = item;

  const decreaseQuantity = () => {
    if (quantity > 0) {
      handleQuantityChange(setCartItems, index, inventory, quantity - 1, item);
    }
  };

  const increaseQuantity = () => {
    handleQuantityChange(setCartItems, index, inventory, quantity + 1, item);
  };

  return (
    <div className="cart-items" key={name}>
      <div className="cart-item-image">
        <img src={item.imageUrl} alt={name} />
      </div>
      <div className="cartItem-middle">
        <div className="cart-item">{name}</div>
        <div className="cart-item">{price}</div>


        <div className="cart-item quantity-change">
          <button className="quantity-btn" onClick={decreaseQuantity}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          {quantity || 0}
          <button className="quantity-btn" onClick={increaseQuantity}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>


      </div>
      <div className="inventory-available-">{inventory} available</div>
      <div className="line-item-total">
        ${(parseFloat(price.replace("$", "")) * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
