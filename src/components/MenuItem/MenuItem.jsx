import Paragraph from '../Paragraph/Paragraph';
import Button from '../Button/Button';
import Image from '../Image/Image';

const MenuItem = (props) => {
  const { pizza } = props;

  return (
    <li className="pizza">
      <Image src={pizza.imageUrl} className="pizza__image" alt="pizza" />
      <div className="pizza__info">
        <Paragraph className="pizza__name" text={pizza.name} />
        <Paragraph className="pizza__ingredients" text={pizza.ingredients.join(', ')} />
        <div className="pizza__actions">
          {pizza.soldOut ? (
            <Paragraph className="pizza__price" text="SOLD OUT" />
          ) : (
            [
              <Paragraph className="pizza__price" text={pizza.unitPrice} />,
              <Button className="button" text="Add to cart" />
            ]
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
