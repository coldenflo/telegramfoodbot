import React from 'react';
import styled from 'styled-components';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'burgers', name: 'Бургеры' },
    { id: 'rolls', name: 'Роллы' },
    { id: 'sets', name: 'Наборы' },
    { id: 'salads', name: 'Салаты' },
    { id: 'hot', name: 'Горячие блюда' },
    { id: 'drinks', name: 'Напитки' },
    { id: 'extra', name: 'Дополнительно' },
  ];

  return (
    <Nav>
      {categories.map((category) => (
        <NavItem
          key={category.id}
          isActive={activeCategory === category.id}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.name}
        </NavItem>
      ))}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.button`
  background: ${(props) => (props.isActive ? '#ff9800' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#333')};
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#e68a00' : '#f0f0f0')};
  }
`;
