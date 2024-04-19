import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { OrderContext } from '../../contexts/OrderContext';

const Order = () => {
  const items = useSelector((state) => state.pizza);
  const { userName } = useContext(AuthContext);
  const { setData } = useContext(OrderContext);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      userName: userName,
      phone: '',
      address: ''
    }
  });

  const cart = items.items.map((item) => ({
    pizzaId: item.id,
    name,
    quantity: item.qty,
    totalPrice: item.qty * item.unitPrice,
    unitPrice: item.unitPrice
  }));

  let totalPrice = 0;
  cart.forEach((el) => {
    totalPrice += el.totalPrice;
  });

  const handleFormSubmit = (data) => {
    const setOrder = async () => {
      try {
        const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            address: data.address,
            customer: data.userName,
            phone: data.phone,
            priority: data.priority,
            position: '',
            cart: cart,
            totalPrice: totalPrice
          })
        });
        if (!response.ok) throw new Error('Something went wrong');

        const params = await response.json();

        setData(params);
        navigate(`/order/${params.data.id}`);
      } catch (e) {
        console.log(e.message);
      }
    };

    setOrder();
  };

  return (
    <>
      <div className='form-order'>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input type='text' {...register('userName')} placeholder='Enter your name' />
          <input type='tel' {...register('phone')} placeholder='Enter your phone number' />
          <input type='text' {...register('address')} placeholder='Enter your address' />
          <input type='checkbox' {...register('priority')} id='priority' />
          <label htmlFor='priority'>Want to give your order priority?</label>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h1>Cart: </h1>
        {!!items.items.length &&
          items.items.map((item) => (
            <li key={item.id}>
              {item.name} {item.qty}
            </li>
          ))}
        <h2>Total Price: {totalPrice}</h2>
      </div>
    </>
  );
};

export default Order;
