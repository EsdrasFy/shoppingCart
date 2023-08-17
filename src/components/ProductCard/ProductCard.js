import formatCurrency from '../../utils/formatCurrency';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus, FaRegHeart, FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import { useState } from 'react';
function ProductCard({ data }) {
  const [heartFill, setHeartFill ] = useState(true)
 
  const { thumbnail, title, price, id } = data;
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(AllContexts);
  const showProduct = () => {
    navigate(`/produto/${id}`);
  };
  const calculateOldPrice = (currentPrice) => {
    const discountPercentage = 10;
    const discountAmount = (currentPrice * discountPercentage) / 100;
    const result = currentPrice + discountAmount;
    return parseFloat(result.toFixed(2));
  };
  const handleAddCart = (data) => {
    setHeartFill(false)
    const existingProduct = cartItems.find((item) => item.id === data.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };
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
        onClick={() => handleAddCart(data)}
      >{heartFill ? <FaRegHeart /> : <FaHeart />}
        
      </button>
    </section>
  );
}

export default ProductCard;
