import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Image from '../Image/Image';
import { useState } from 'react';
import CountButton from '../CountButton/CountButton';

const MenuItem = (props) => {
  const { pizza } = props;
  // const [pizzaCount, setPizzasCount] = useState(0);

  return (
    <li className="pizza" key={pizza.id * Math.random()}>
      <Image src={pizza.imageUrl} className="pizza__image" alt="pizza" />
      <div className="pizza__info">
        <Paragraph className="pizza__name" text={pizza.name} />
        <Paragraph className="pizza__ingredients" text={pizza.ingredients.join(', ')} />
        <div className="pizza__actions">
          {pizza.soldOut ? (
            <Paragraph className="pizza__price" text="SOLD OUT" key={pizza.id * Math.random()} />
          ) : (
            [
              <Paragraph
                className="pizza__price"
                text={pizza.unitPrice}
                key={pizza.id * Math.random()}
              />,
              <Button key={pizza.id * Math.random()} isCount={true} className="button" />
            ]
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
