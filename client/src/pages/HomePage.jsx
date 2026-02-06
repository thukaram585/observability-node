import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section>
      <h2>Welcome</h2>
      <p>This is a simple React app with navigation between pages.</p>
      <p>
        Go to the <Link to="/items">Items page</Link> to see a list of data loaded from the Node.js server.
      </p>
    </section>
  );
};

export default HomePage;

