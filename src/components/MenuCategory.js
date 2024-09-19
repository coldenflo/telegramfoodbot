import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const menuData = {
  burgers: [
    {
      id: 1,
      name: 'Классический бургер',
      price: 350,
      img: 'https://www.themealdb.com/images/media/meals/spswqs1511558697.jpg',
    },
    {
      id: 2,
      name: 'Чизбургер',
      price: 370,
      img: 'https://www.themealdb.com/images/media/meals/qtuvrj1511558439.jpg',
    },
    {
      id: 3,
      name: 'Двойной бургер',
      price: 500,
      img: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    },
    // Другие бургеры
  ],
  rolls: [
    {
      id: 4,
      name: 'Ролл Калифорния',
      price: 400,
      img: 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg',
    },
    {
      id: 5,
      name: 'Ролл Филадельфия',
      price: 450,
      img: 'https://www.themealdb.com/images/media/meals/tuvxvu1511552577.jpg',
    },
    {
      id: 6,
      name: 'Ролл Дракон',
      price: 480,
      img: 'https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg',
    },
    // Другие роллы
  ],
  sets: [
    {
      id: 7,
      name: 'Набор ассорти',
      price: 900,
      img: 'https://www.themealdb.com/images/media/meals/sytxyx1603724814.jpg',
    },
    {
      id: 8,
      name: 'Сет с роллами',
      price: 850,
      img: 'https://www.themealdb.com/images/media/meals/usywpp1511556705.jpg',
    },
    {
      id: 9,
      name: 'Праздничный набор',
      price: 1200,
      img: 'https://www.themealdb.com/images/media/meals/wvqrqv1511783067.jpg',
    },
    // Другие наборы
  ],
  salads: [
    {
      id: 10,
      name: 'Греческий салат',
      price: 320,
      img: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    },
    {
      id: 11,
      name: 'Цезарь с курицей',
      price: 420,
      img: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg',
    },
    {
      id: 12,
      name: 'Овощной салат',
      price: 300,
      img: 'https://www.themealdb.com/images/media/meals/1529441292.jpg',
    },
    // Другие салаты
  ],
  hot: [
    {
      id: 13,
      name: 'Стейк с овощами',
      price: 950,
      img: 'https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg',
    },
    {
      id: 14,
      name: 'Курица в соусе',
      price: 600,
      img: 'https://www.themealdb.com/images/media/meals/txxyhr1536015766.jpg',
    },
    {
      id: 15,
      name: 'Рыба на гриле',
      price: 850,
      img: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    },
    // Другие горячие блюда
  ],
  drinks: [
    {
      id: 16,
      name: 'Кока-кола',
      price: 150,
      img: 'https://www.themealdb.com/images/media/drinks/uqwyy91558270091.jpg',
    },
    {
      id: 17,
      name: 'Сок апельсиновый',
      price: 180,
      img: 'https://www.themealdb.com/images/media/drinks/qwvwqr1515447699.jpg',
    },
    {
      id: 18,
      name: 'Минеральная вода',
      price: 100,
      img: 'https://www.themealdb.com/images/media/drinks/5noda61589575158.jpg',
    },
    // Другие напитки
  ],
  extra: [
    {
      id: 19,
      name: 'Соус тартар',
      price: 50,
      img: 'https://www.themealdb.com/images/media/meals/q3fy0w1560437806.jpg',
    },
    {
      id: 20,
      name: 'Палочки для суши',
      price: 30,
      img: 'https://www.themealdb.com/images/media/meals/stxzjz1515383032.jpg',
    },
    {
      id: 21,
      name: 'Соус терияки',
      price: 70,
      img: 'https://www.themealdb.com/images/media/meals/1529446161.jpg',
    },
    // Другие дополнительные товары
  ],
};

const MenuCategory = ({ category, addToCart }) => {
  const items = menuData[category];

  return (
    <CategoryWrapper>
      {items.map((item) => (
        <MenuItem key={item.id}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price} ₽</p>
          <button onClick={() => addToCart(item)}>Добавить в корзину</button>
        </MenuItem>
      ))}
    </CategoryWrapper>
  );
};

export default MenuCategory;

const CategoryWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
`;

const MenuItem = styled(motion.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
