import Paragraph from '../Paragraph/Paragraph';
import Image from '../Image/Image';
import { useState } from 'react';

const MenuItem = (props) => {
  const { pizza } = props;
  // const [pizzaCount, setPizzasCount] = useState(0);

  const [count, setCount] = useState(1);
  const [hidden, setHidden] = useState(false);

  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    count > 1 && setCount(count - 1);
  }

  return (
    <li className='pizza' key={pizza.id * Math.random()}>
      <Image
        src={pizza.imageUrl}
        className='pizza__image'
        alt='pizza'
        key={pizza.id * Math.random()}
      />
      <div className='pizza__info'>
        <Paragraph className='pizza__name' text={pizza.name} key={pizza.id * Math.random()} />
        <Paragraph
          className='pizza__ingredients'
          text={pizza.ingredients.join(', ')}
          key={pizza.id * Math.random()}
        />
        <div className='pizza__actions'>
          {pizza.soldOut ? (
            <Paragraph className='pizza__price' text='SOLD OUT' key={pizza.id * Math.random()} />
          ) : (
            [
              <div className='menu__btns'>
                <Paragraph
                  className='pizza__price'
                  text={pizza.unitPrice}
                  key={pizza.id * Math.random()}
                />

                <div>
                  {!hidden ? (
                    <button className='button' onClick={() => setHidden(true)}>
                      Add to Cart
                    </button>
                  ) : (
                    <div>
                      <button className='button' onClick={minusCount}>
                        -
                      </button>
                      <output className='count'>{count}</output>
                      <button className='button' onClick={addCount}>
                        +
                      </button>
                      <button className='button' onClick={() => setHidden(false)}>
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
