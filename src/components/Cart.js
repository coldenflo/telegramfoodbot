import React, { useState } from 'react';
import styled from 'styled-components';

// Главный компонент корзины
const Cart = ({ cartItems, updateItemQuantity, removeItem }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Функция для отображения корзины
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartIconContainer onClick={handleCartToggle}>
        <CartIcon>🛒</CartIcon>
        {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
      </CartIconContainer>

      {isCartOpen && (
        <CartContainer>
          <CartHeader>
            <h2>Корзина</h2>
            <CloseButton onClick={handleCartToggle}>Закрыть</CloseButton>
          </CartHeader>

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
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  </QuantityControls>
                  <RemoveButton onClick={() => removeItem(item.id)}>Удалить</RemoveButton>
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

// Стилизация корзины и элементов
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
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #ff5c5c;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ff1f1f;
  }
`;

const CartItemsContainer = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
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

const RemoveButton = styled.button`
  background-color: #ff5c5c;
  border: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff1f1f;
  }
`;

const TotalContainer = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;
