import React from 'react';

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Task!</p>
      <li>
            <Link to="/task">New task</Link>
          </li>
    </div>
  );
}

export default Home;