import React, { useState } from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
        <CartIcon>🛒</CartIcon>
        {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
      </CartIconContainer>

      {isCartOpen && (
        <CartContainer>
          <h2>Корзина</h2>
          <CartItemsContainer>
            {cartItems.length === 0 ? (
              <p>Ваша корзина пуста</p>
            ) : (
              cartItems.map((item, index) => (
                <CartItem key={index}>
                  <ItemDetails>
                    <p>{item.name}</p>
                    <p>{item.price}₽</p>
                  </ItemDetails>
                  <QuantityControls>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </QuantityControls>
                </CartItem>
              ))
            )}
          </CartItemsContainer>
          <TotalContainer>
            <p>Итого: {total}₽</p>
          </TotalContainer>
        </CartContainer>
      )}
    </>
  );
};

export default Cart;

const CartIconContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #28a745;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const CartIcon = styled.div`
  font-size: 30px;
  color: white;
`;

const ItemCount = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: bold;
`;

const CartContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const CartItemsContainer = styled.div`
  max-height: 250px;
  overflow-y: auto;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin: 0;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: #ffcc00;
    border: none;
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ffa500;
    }
  }

  span {
    font-size: 16px;
  }
`;

const TotalContainer = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
