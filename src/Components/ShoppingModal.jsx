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
            <div>
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingModal;
