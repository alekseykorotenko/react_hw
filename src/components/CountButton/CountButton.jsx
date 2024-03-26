import { useState } from 'react';
import Button from '../Button/Button';

const CountButton = (props) => {
  // const { sign } = props;
  const { className, text } = props;
  const [count, setCount] = useState(1);
  const [hidden, setHidden] = useState(false);

  function addCount() {
    setCount(count + 1);
  }

  function minusCount() {
    count > 1 && setCount(count - 1);
  }

  return (
    <div>
      {!hidden ? (
        <button className={className} onClick={() => setHidden(true)}>
          Add to Cart
        </button>
      ) : (
        <div>
          <button className={className} onClick={minusCount}>
            -
          </button>
          <output className="count">{count}</output>
          <button className={className} onClick={addCount}>
            +
          </button>
          <button className={className} onClick={() => setHidden(false)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CountButton;
