import React from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems }) => {
  return (
    <CartContainer>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        cartItems.map((item, index) => (
          <CartItem key={index}>
            <p>{item.name}</p>
            <p>{item.price}₽</p>
          </CartItem>
        ))
      )}
      <Total>Итого: {cartItems.reduce((sum, item) => sum + item.price, 0)}₽</Total>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Total = styled.div`
  font-weight: bold;
  margin-top: 20px;
  text-align: right;
`;
