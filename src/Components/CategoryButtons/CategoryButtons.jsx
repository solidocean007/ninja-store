export const CategoryButtons = ({ categoryFilter, categoryArray, activeCategories = [] }) => {
  return (
    <div className="category-filter">
      {categoryArray.map((title, name) => (
        <div className={`category-button ${activeCategories.includes(title) ? "active" : ""}`} key={name}>
          <button onClick={() => categoryFilter(title)}>{title}</button>
        </div>
      ))}
    </div>
  );
};

