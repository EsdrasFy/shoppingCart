import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartButton.css';
import { useContext } from 'react';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
function CartButton() {
  let { cartItems, isCartVisible, setIsCartVisible, totalQuant } = useContext(AllContexts);
  return (
    <button
      type="button"
      className="cart__button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="cart-status">{totalQuant}</span>}
    </button>
  );
}

export default CartButton;
