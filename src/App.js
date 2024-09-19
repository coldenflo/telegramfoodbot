import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import MenuCategory from './components/MenuCategory';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const updateCartItem = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleOrderConfirmation = () => {
    setOrderConfirmed(true);
    setCartItems([]); // Очищаем корзину после подтверждения заказа
  };

  return (
    <AppWrapper>
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      {!showCheckout && !orderConfirmed && (
        <MenuWrapper>
          <MenuCategory category={activeCategory} addToCart={addToCart} />
        </MenuWrapper>
      )}
      {showCheckout && !orderConfirmed && (
        <Checkout cartItems={cartItems} handleOrderConfirmation={handleOrderConfirmation} />
      )}
      {orderConfirmed && (
        <OrderConfirmation />
      )}
      <Cart
        cartItems={cartItems}
        updateCartItem={updateCartItem}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const MenuWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
