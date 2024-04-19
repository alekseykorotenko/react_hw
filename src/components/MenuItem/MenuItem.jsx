import Paragraph from '../Paragraph/Paragraph';
import Image from '../Image/Image';
import { addToCard, decrement, increment, removeFromCard } from '../../redux/slices/pizzaSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MenuItem = (props) => {
  const { pizza } = props;
  const items = useSelector((state) => state.pizza.items);

  const item = items.filter((item) => item.id === pizza.id);

  const [hidden, setHidden] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCard(item));
    setHidden(true);
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCard(item));
    setHidden(false);
  };

  const handleIncrement = (pizza) => {
    dispatch(increment(pizza));
  };

  const handleDecrement = (pizza) => {
    dispatch(decrement(pizza));
  };

  return (
    <li className='pizza' key={pizza.id * Math.random()}>
      <Image
        src={pizza.imageUrl}
        className='pizza__image'
        alt='pizza'
        key={pizza.id * Math.random()}
      />
      <div className='pizza__info' key={pizza.id * Math.random()}>
        <Paragraph className='pizza__name' text={pizza.name} key={pizza.id * Math.random()} />
        <Paragraph
          className='pizza__ingredients'
          text={pizza.ingredients.join(', ')}
          key={pizza.id * Math.random()}
        />
        <div className='pizza__actions' key={pizza.id * Math.random()}>
          {pizza.soldOut ? (
            <Paragraph className='pizza__price' text='SOLD OUT' key={pizza.id * Math.random()} />
          ) : (
            [
              <div className='menu__btns' key={pizza.id * Math.random()}>
                <Paragraph
                  className='pizza__price'
                  text={pizza.unitPrice}
                  key={pizza.id * Math.random()}
                />

                <div>
                  {!hidden ? (
                    <button
                      className='button'
                      onClick={() => {
                        handleAddToCart(pizza);
                      }}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div>
                      <button
                        className='button'
                        onClick={() => {
                          handleDecrement(pizza);
                        }}
                      >
                        -
                      </button>
                      <output className='qty'>{item[0].qty}</output>
                      <button
                        className='button'
                        onClick={() => {
                          handleIncrement(pizza);
                        }}
                      >
                        +
                      </button>
                      <button className='button' onClick={() => handleRemoveFromCart(pizza.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ]
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
