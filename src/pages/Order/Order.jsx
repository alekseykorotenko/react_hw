import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthContext';

const Order = () => {
  const { userName } = useContext(AuthContext);

  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      userName: userName,
      phone: '',
      address: ''
    }
  });

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input type='text' {...register('userName')} placeholder='Enter your name' />
      <input type='tel' {...register('phone')} placeholder='Enter your phone nubmer' />
      <input type='text' {...register('address')} placeholder='Enter your address' />
      <input type='checkbox' {...register('priority')} id='priority' />
      <label htmlFor='priority'>Want to give your order priority?</label>
      <button>Submit</button>
    </form>
  );
};

export default Order;
