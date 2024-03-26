import { useState } from 'react';
import Button from '../Button/Button';
import MenuItem from '../MenuItem/MenuItem';
import Paragraph from '../Paragraph/Paragraph';

const Menu = (props) => {
  const [pizzas, setPizzas] = useState(props.pizzas);

  return (
    <div className="content">
      <ul>
        {pizzas.map((pizza) => {
          return <MenuItem key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
