import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import MenuCategory from './components/MenuCategory';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import styled from 'styled-components';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Бургеры');
  const [cartItems, setCartItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const menuItems = {
    Бургеры: [
      { id: 1, name: 'Бургер с котлетой из фермерской говядины', price: 300, image: 'burger1.jpg' },
      { id: 2, name: 'Бургер с котлетой из рыбы', price: 350, image: 'burger2.jpg' },
      { id: 3, name: 'Бургер с говяжьей котлетой и яйцом', price: 320, image: 'burger3.jpg' },
      { id: 4, name: 'Бургер с куриной котлетой и овощами', price: 330, image: 'burger4.jpg' }
    ],
    Роллы: [
      { id: 1, name: 'Калифорния с крабом', price: 450, image: 'roll1.jpg' },
      { id: 2, name: 'Филадельфия с лососем', price: 500, image: 'roll2.jpg' },
      { id: 3, name: 'Ролл с тунцом', price: 470, image: 'roll3.jpg' }
    ],
    Наборы: [
      { id: 1, name: 'Набор "Суши"', price: 1200, image: 'set1.jpg' },
      { id: 2, name: 'Набор "Бургеры"', price: 900, image: 'set2.jpg' }
    ],
    Салаты: [
      { id: 1, name: 'Цезарь с курицей', price: 300, image: 'salad1.jpg' },
      { id: 2, name: 'Овощной салат', price: 250, image: 'salad2.jpg' }
    ],
    'Горячие блюда': [
      { id: 1, name: 'Стейк с овощами', price: 950, image: 'steak1.jpg' },
      { id: 2, name: 'Курица в соусе', price: 600, image: 'chicken1.jpg' }
    ],
    Напитки: [
      { id: 1, name: 'Кола', price: 100, image: 'cola.jpg' },
      { id: 2, name: 'Спрайт', price: 100, image: 'sprite.jpg' }
    ],
    Дополнительно: [
      { id: 1, name: 'Соус Тартар', price: 70, image: 'sauce1.jpg' },
      { id: 2, name: 'Кетчуп', price: 60, image: 'sauce2.jpg' }
    ]
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };
  
  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  return (
    <AppContainer>
      <MenuCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <MenuItems>
        {menuItems[selectedCategory].map((item) => (
          <MenuItem key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}₽</p>
            <button onClick={() => handleAddToCart(item)}>Добавить в корзину</button>
          </MenuItem>
        ))}
      </MenuItems>
      <Cart cartItems={cartItems} />
      <Checkout cartItems={cartItems} />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const MenuItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const MenuItem = styled.div`
  width: 48%;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
  h3 {
    font-size: 16px;
    margin: 10px 0 5px;
  }
  p {
    margin-bottom: 10px;
  }
  button {
    background-color: #ffcc00;
    color: #fff;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #ffa500;
    }
  }
`;
