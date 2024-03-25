import { useState } from 'react';

const Menu = (props) => {
  const [pizzas, setPizzas] = useState(props.pizzas);

  return (
    <div className="content">
      <ul>
        {pizzas.map((pizza) => {
          if (pizza.soldOut === false) {
            console.log(pizza);
            return (
              <li key={pizza.id} className="pizza">
                <img src={pizza.imageUrl} className="pizza__image" alt="pizza" />
                <div className="pizza__info">
                  <p className="pizza__name">{pizza.name}</p>
                  <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
                  <div className="pizza__actions">
                    <p className="pizza__price">€{pizza.unitPrice}</p>
                    <button className="button">Add to cart</button>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={pizza.id} className="pizza">
              <img src={pizza.imageUrl} className="pizza__image" alt="pizza" />
              <div className="pizza__info">
                <p className="pizza__name">{pizza.name}</p>
                <p className="pizza__ingredients">{pizza.ingredients.join(', ')}</p>
                <div className="pizza__actions">
                  <p className="pizza__price">SOLD OUT</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
