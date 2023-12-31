import React, { useState, useEffect } from "react";
import { handleCartUpdate } from "../utilities/cart";
import "./ItemGrid.css";
import fetchProducts from "../../../services";
import { CategoryButtons } from "../CategoryButtons/CategoryButtons";
import ItemCard from "./ItemCard";
import { SearchBar } from "../SearchBar/SearchBar";

async function fetchItems() {
  try {
    const storeItems = await fetchProducts();
    return storeItems;
  } catch (error) {
    console.error(error);
  }
}

function ItemGrid({ cartItems, setCartItems, activeCards, setActiveCards }) {
  const [items, setItems] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
      setFilteredItems(fetchedItems);
    }
    fetchData();
  }, []);

  useEffect(() => {
    updateFilteredItems();
  }, [activeCategories, searchQuery]);

  const handleItemClick = (item, index) => {
    const inCart = cartItems.find((obj) => obj.name === item.name);
    handleCartUpdate(item, cartItems, setCartItems);
    setActiveCards((prevActiveCards) => ({
      ...prevActiveCards,
      [index]: !inCart,
    }));
  };

  const categoryArray = items.reduce((acc, item) => {
    const categoryName = item.category;
    if (!acc.includes(categoryName)) {
      acc.push(categoryName);
    }
    return acc;
  }, []);

  // Filter items based on selected categories and search query
  const categoryFilter = (category) => {
    if (activeCategories.includes(category)) {
      setActiveCategories((prevActiveCategories) =>
        prevActiveCategories.filter((cat) => cat !== category)
      );
    } else {
      setActiveCategories((prevActiveCategories) => [
        ...prevActiveCategories,
        category,
      ]);
    }

    updateFilteredItems();
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    updateFilteredItems();
  };

  const updateFilteredItems = () => {
    const filtered = items.filter((item) => {
      if (
        activeCategories.length > 0 &&
        !activeCategories.includes(item.category)
      ) {
        return false;
      }

      if (searchQuery.trim() !== "") {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      }

      return true;
    });

    setFilteredItems(filtered);
  };

  return (
    <>
      <CategoryButtons
        categoryFilter={categoryFilter}
        categoryArray={categoryArray}
        activeCategories={activeCategories}
      />
      <SearchBar
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="featured-items">
        {filteredItems.length &&
          filteredItems.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              inCart={cartItems.find((obj) => obj.name === item.name)}
              isActive={activeCards[index]}
              handleClick={() => handleItemClick(item, index)}
              setCartItems={setCartItems}
            />
          ))}
      </div>
    </>
  );
}

export default ItemGrid;
