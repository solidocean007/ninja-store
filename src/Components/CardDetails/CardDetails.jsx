import './CardDetails.css'

export const CardDetails = ({ item, setShowDetails }) => {
  const { name, imageUrl, price, description, inventory } = item;
  return (
    <div className="card-details">
      <div className="card-details-image">
        <img src={imageUrl} alt={name} />
        <button className="close-details" onClick={() => setShowDetails(false)}>
          X
        </button>
      </div>
      <div className="card-details-item">{name}</div>
        <div className="card-details-item">{price}</div>
      <div className="card-details-item">{description}</div>
    </div>
  );
};
