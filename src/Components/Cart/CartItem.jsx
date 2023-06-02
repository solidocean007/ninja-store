import { handleQuantityChange } from "../utilities/handleChanges";

const CartItem = ({ item, index, setCartItems }) => {
  const { image, name, price, quantity } = item;

  const decreaseQuantity = () => {
    if (quantity > 0) {
      handleQuantityChange(setCartItems, index, quantity - 1);
    } 
  };

  const increaseQuantity = () => {
    handleQuantityChange(setCartItems, index, quantity + 1);
  };

  return (
    <div className="cart-items" key={name}>
        <div className="cart-item-image">
          <img
            src={image}
            alt={name}
            style={{
              width: "8vw",
              height: "12vh",
            }}
          />
        </div>
        <div className="cart-item">{name}</div>
        <div className="cart-item">${price}</div>

        <div className="cart-item quantity-change">
          <button className="quantity-btn" onClick={decreaseQuantity}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          {quantity}
          <button className="quantity-btn" onClick={increaseQuantity}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="line-item-total">${price * quantity}</div>
      </div>
  );
};

export default CartItem;
