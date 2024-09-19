import React from 'react';
import styled from 'styled-components';

const OrderConfirmation = () => {
  return (
    <ConfirmationWrapper>
      <h2>Ваш заказ успешно оформлен!</h2>
      <p>Спасибо за ваш заказ. Наш оператор свяжется с вами в ближайшее время для подтверждения заказа.</p>
    </ConfirmationWrapper>
  );
};

export default OrderConfirmation;

const ConfirmationWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #28a745;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #555;
  }
`;
