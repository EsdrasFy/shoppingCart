import React, { useContext, useState } from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaRegHeart, FaHeart } from 'react-icons/fa';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
  const { thumbnail, title, price, id } = data;
  const navigate = useNavigate();
  const { addItemToCart } = useContext(AllContexts);
  const [heartFill, setHeartFill] = useState(true);
  const handleAddItem = (data) => {
    addItemToCart(data);
  };
  const showProduct = () => {
    navigate(`/produto/${id}`);
    setHeartFill(false);
  };
  const calculateOldPrice = (currentPrice) => {
    const discountPercentage = 10;
    const discountAmount = (currentPrice * discountPercentage) / 100;
    const result = currentPrice + discountAmount;
    return parseFloat(result.toFixed(2));
  };
;

  return (
    <section className="product-card">
      <div onClick={showProduct}>
        <img
          src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
          alt={title}
          className="card_image"
        />
        <div className="card__infos">
          <h4 className="old__price">R$ {calculateOldPrice(price)}</h4>
          <h2 className="card__price">{formatCurrency(price)}</h2>
          <h2 className="card__title">{title}</h2>
        </div>
      </div>
      <button
        type="button"
        className="button__add-cart"
        onClick={() => handleAddItem(data)}
      >
        {heartFill ? <FaRegHeart /> : <FaHeart />}
      </button>
    </section>
  );
}

export default ProductCard;
