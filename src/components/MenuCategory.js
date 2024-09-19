import React from 'react';
import styled from 'styled-components';

const categories = [
  'Бургеры',
  'Роллы',
  'Наборы',
  'Салаты',
  'Горячие блюда',
  'Напитки',
  'Дополнительно'
];

const MenuCategory = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          isSelected={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};

export default MenuCategory;

// Стили для контейнера категорий и кнопок
const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: #f8f8f8;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#ffcc00' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#ffa500' : '#f0f0f0')};
  }
`;
