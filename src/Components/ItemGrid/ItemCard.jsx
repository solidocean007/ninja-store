function ItemCard({ item, inCart, isActive, handleClick }) {
  const buttonText = inCart ? "Remove item" : "Add to Cart";

  const handleDetailsClick = () => {
    // open a modal with image, name, price, details, add to cart button
  };

  return (
    <div>
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
              <button onClick={handleDetailsClick}>Details</button>
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
    </div>
  );
}

export default ItemCard;