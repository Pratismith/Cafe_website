import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then((response) => setMenu(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

