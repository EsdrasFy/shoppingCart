import React, { useContext } from 'react';
import './CartItem.css';
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';

function CartItem({ data }) {
  const { id, thumbnail, price, title } = data;
  const {cartItems , setCartItems} = useContext(AllContexts)
  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    
    const storedData = JSON.parse(localStorage.getItem('minhaArraySalva')) || [];
    const updatedData = storedData.filter((item) => item.id !== id);
    localStorage.setItem('minhaArraySalva', JSON.stringify(updatedData));
  };
  const cartItem = cartItems.find((item) => item.id === id);
  return (
    <div className="cart-item">
      <img src={thumbnail} alt="cart-item" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price,'BRL')}</h3>
        <button type="button" className="button__remove-item" onClick={()=>handleRemoveItem(id)}>
          <BsCartDashFill />
        </button>
        <div className='qtd'>qtd: {cartItem ? cartItem.quantity : 0}</div>
      </div>
    </div>
  );
}

export default CartItem;