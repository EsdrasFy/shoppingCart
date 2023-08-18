import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible, setTotalQuant, setCartItems} = useContext(AllContexts);
  const cartSummary = cartItems.reduce((summary, item) => {
    if (!summary[item.id]) {
      summary[item.id] = {
        price: item.price,
        quantity: item.quantity,
      };
    } else {
      summary[item.id].quantity += item.quantity;
    }
    return summary;
  }, {});
  
  const { totalPrice, totalQuantity } = Object.values(cartSummary).reduce(
    (acc, item) => {
      return {
        totalPrice: item.price * item.quantity + acc.totalPrice,
        totalQuantity: item.quantity + acc.totalQuantity,
      };
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  useEffect(() => {
    setTotalQuant(totalQuantity);
  }, [totalQuantity]);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">
        <p>Total Items: {totalQuantity}</p>
        <p>Valor Total: {formatCurrency(totalPrice, 'BRL')}</p>
      </div>
    </section>
  );
}

export default Cart;