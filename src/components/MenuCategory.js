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
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          isSelected={selectedCategory === category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </CategoryButton>
      ))}
      <OverlayRight />
    </CategoryContainer>
  );
};

export default MenuCategory;

const CategoryContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: #f8f8f8;
  white-space: nowrap;
  border-bottom: 1px solid #ddd;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const CategoryButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#ffcc00' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  padding: 10px 30px;
  margin-right: 10px;
  border: 2px solid #ddd;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#ffa500' : '#f0f0f0')};
  }
`;

const OverlayRight = styled.div`
  position: absolute;
  right: 0;
  width: 50px;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
`;
