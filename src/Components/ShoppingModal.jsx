import { useState } from "react";
import InputBase from "./InputBase";
import data from "./data";
import './ShoppingModal.css';

function ShoppingModal() {
  const [Cart, setCart] = useState({});

  return (
    <div className="store-front">
      <div className="login-header"></div>
      <div className="featured-items">
        {data.map((item, index) => (
          <div className='item-container' key={index}>
            <div className="image-box">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: item.size?.width,
                  height: item.size?.height
                }}
                />
            </div>
            <div className="lion-header">
            <h2>{item.name}</h2>
            </div>
            <div className="lion-price">
            <h1>{item.price}</h1>
            <button>Add to Cart</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingModal;
