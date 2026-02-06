import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList.jsx';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Use a relative URL so it works on any host (e.g. node.devopsark.com)
        const response = await fetch('/api/items');
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <section>
      <h2>Items</h2>
      <p>Below is a list of items provided by the Node.js server.</p>
      <ItemList items={items} loading={loading} error={error} />
    </section>
  );
};

export default ItemsPage;

