import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '../../components/MenuItem/MenuItem';
import { fetchAllPizzas } from '../../redux/slices/pizzaSlice';

const Menu = () => {
  const pizzas = useSelector((state) => state.pizza.pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPizzas());
  }, [dispatch]);

  return (
    <div className='content'>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <div key={pizza.id * Math.random()}>
              <MenuItem key={pizza.id * Math.random()} pizza={pizza} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
