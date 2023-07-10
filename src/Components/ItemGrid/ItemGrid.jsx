import React, { useState, useEffect } from "react";
// import { data } from "../utilities/data";
import { handleCartUpdate } from "../utilities/cart";
import "./ItemGrid.css";
import fetchProducts from "../../../services";

async function fetchItems() {
  try {
    const storeItems = await fetchProducts();
    // Process the items as needed
    console.log('storeItems: ', storeItems); // This is never logged.

    return storeItems;
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}

function ItemCard({ item, inCart, isActive, handleClick }) {
  const buttonText = inCart ? "Remove item" : "Add to Cart";

  return (
    <div className={`card ${isActive ? "active" : ""}`}>
      <div className="front">
        <div className="image-box">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="details">
          <div className="lion-header">
            <h2>{item.name}</h2>
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
  );
}

function ItemGrid({ cartItems, setCartItems, activeCards, setActiveCards }) {
  const[items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
      console.log(fetchItems, ' :fetchedItems')
      console.log(items, " : items") // This is logging []
      // length
      // : 
      // 0
      // [[Prototype]]
      // : 
      // Array(0)
    }
  
    fetchData();
  }, []);


  const handleItemClick = (item, index) => {
    const inCart = cartItems.find((obj) => obj.name === item.name);

    handleCartUpdate(item, cartItems, setCartItems);

    setActiveCards((prevActiveCards) => ({
      ...prevActiveCards,
      [index]: !inCart,
    }));
  };
  
  return (
    <div className="featured-items">
      {items && items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          inCart={cartItems.find((obj) => obj.name === item.name)}
          isActive={activeCards[index]}
          handleClick={() => handleItemClick(item, index)}
        />
      ))}
    </div>
  );
}

export default ItemGrid;

