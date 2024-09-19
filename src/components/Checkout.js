import React, { useState } from 'react';
import styled from 'styled-components';

const Checkout = ({ cartItems, handleOrderConfirmation }) => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      address,
      phone,
      paymentMethod,
      items: cartItems,
      totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 150, // Добавляем 150 рублей за доставку
    };

    const message = `
      Новый заказ:
      Адрес: ${orderData.address}
      Телефон: ${orderData.phone}
      Способ оплаты: ${orderData.paymentMethod === 'cash' ? 'Наличными' : 'Картой'}
      Блюда: ${orderData.items.map(item => `${item.name} x${item.quantity}`).join(', ')}
      Итоговая сумма: ${orderData.totalPrice} ₽
    `;

    // Отправка данных в Телеграм
    const url = `https://api.telegram.org/bot<YOUR_BOT_API_TOKEN>/sendMessage?chat_id=@SKusatov&text=${encodeURIComponent(message)}`;
    fetch(url).then(() => {
      alert('Заказ отправлен!');
      handleOrderConfirmation();
    });
  };

  return (
    <CheckoutWrapper>
      <h2>Оформление заказа</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label>Адрес доставки</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Номер телефона</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Способ оплаты</label>
          <div>
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            <label htmlFor="cash">Наличными</label>

            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            <label htmlFor="card">Картой</label>
          </div>
        </FormGroup>

        <CheckoutButton type="submit">Отправить заказ</CheckoutButton>
      </form>
    </CheckoutWrapper>
  );
};

export default Checkout;

// Определение стилей для CheckoutWrapper, FormGroup, и CheckoutButton

const CheckoutWrapper = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
  }

  input[type="text"],
  input[type="tel"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }

  input[type="radio"] {
    margin-right: 10px;
  }

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
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
