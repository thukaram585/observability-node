import React from 'react';

const ItemList = ({ items, loading, error }) => {
  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p className="error">Error loading items: {error}</p>;
  }

  if (!items.length) {
    return <p>No items found.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-card">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

