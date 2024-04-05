import { useContext, useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getAllPizzas = async () => {
      try {
        const response = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        setPizzas(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllPizzas();
  }, []);

  return (
    <div className='content'>
      <ul>
        {pizzas.map((pizza) => {
          return <MenuItem key={pizza.id * Math.random()} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
