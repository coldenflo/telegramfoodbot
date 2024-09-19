import React, { useState } from 'react';
import MenuCategory from './components/MenuCategory';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import styled from 'styled-components';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Бургеры');
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContainer>
      <MenuCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MenuItems>
        {/* Здесь будут компоненты для отображения блюд */}
      </MenuItems>
      <Cart cartItems={cartItems} />
      <Checkout cartItems={cartItems} />
    </AppContainer>
  );
}

export default App;

// Стили для основного контейнера
const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const MenuItems = styled.div`
  padding: 20px;
`;
