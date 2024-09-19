import React from 'react';
import styled from 'styled-components';

const Cart = ({ cartItems, updateCartItem, removeFromCart, handleCheckout }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartWrapper>
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <>
          <CartItems>
            {cartItems.map((item, index) => (
              <CartItem key={index}>
                <img src={item.img} alt={item.name} width="50" height="50" />
                <p>{item.name}</p>
                <QuantityControls>
                  <button
                    onClick={() =>
                      updateCartItem(
                        item.id,
                        item.quantity > 1 ? item.quantity - 1 : 1
                      )
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>
                    +
                  </button>
                </QuantityControls>
                <span>{item.price * item.quantity} ₽</span>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Удалить
                </RemoveButton>
              </CartItem>
            ))}
          </CartItems>
          <Total>Итого: {totalPrice + 150} ₽ (включая доставку 150 ₽)</Total>
          <CheckoutButton onClick={handleCheckout}>Оформить заказ</CheckoutButton>
        </>
      )}
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`;

const CartItems = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  img {
    margin-right: 10px;
    border-radius: 5px;
  }

  p {
    flex: 1;
    font-size: 16px;
  }

  span {
    font-size: 16px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 16px;
    text-align: center;
  }

  span {
    font-size: 16px;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Total = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 15px;
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
