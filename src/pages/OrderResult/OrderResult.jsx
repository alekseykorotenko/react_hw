import React, { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

const OrderResult = () => {
  const { data } = useContext(OrderContext);

  const param = data.data;
  console.log(param.cart);

  return (
    <div>
      <h2>Cart:</h2>
      {param.cart.map((pizza) => (
        <li key={pizza.id}>
          Name: {pizza.name} Qty: {pizza.quantity} TotalPrice: {pizza.totalPrice}
        </li>
      ))}
      {/* {param.cart.map((item) => {
        <li key={item.id}>
          Name: {item.name} Qty: {item.quantity} TotalPrice: {item.totalPrice}
        </li>;
      })} */}
      <h2>Customer: </h2>
      {param.customer}
      <h2>Estamated Delivery</h2>
      {param.estimatedDelivery}
      <h2>Order Price</h2>
      {param.orderPrice}
      <h2>Priority</h2>
      {param.priority.toString()}
      <h2>Priority Price</h2>
      {param.priorityPrice}
      <h2>Status</h2>
      {param.status}
    </div>
  );
};

export default OrderResult;
