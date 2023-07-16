import { useState } from "react";
import { CardDetails } from "../CardDetails/CardDetails";

function ItemCard({ item, inCart, isActive, handleClick, setCartItems }) {
  const [showDetails, setShowDetails] = useState(false);
  const buttonText = inCart ? "Remove item" : "Add to Cart";

  return (
    <>
      <div className={`card ${isActive ? "active" : ""}`}>
        <div className="front">
          <div className="image-box">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="details">
            <div className="lion-header">
              <h2>{item.name}</h2>
            </div>
            <div className="item-details">
              <button onClick={() => setShowDetails(!showDetails)}>
                Details
              </button>
            </div>
            <div className="lion-price">
              <h1>{item.price}</h1>
            </div>
            <div className="buy-btn-div">
              <button onClick={handleClick}>{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
          <div className="modal-overlay">
            <div className="details-container">
            <CardDetails setCartItems={setCartItems} />
          </div>
          </div>
        )}
    </>
  );
}

export default ItemCard;
