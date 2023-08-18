import React, { createContext, useEffect, useState } from 'react';

const AllContexts = createContext();

const AllProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [arrayCartLocal, setArrayCartLocal] = useState([]);
  const [totalQuant, setTotalQuant] = useState();
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [popop, setPopop] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    minValue: '',
    maxValue: '',
  });
  const addItemToCart = (data) => {
    const existingProduct = cartItems.find((item) => item.id === data.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item,
      );

      if (existingProduct) {
        localStorage.setItem('minhaArraySalva', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
      } else {
        const newCartItem = { ...data, quantity: 1 };
        setCartItems([...cartItems, newCartItem]);
        localStorage.setItem(
          'minhaArraySalva',
          JSON.stringify([...cartItems, newCartItem]),
        );
      }
    } else {
      const newCartItem = { ...data, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
      localStorage.setItem(
        'minhaArraySalva',
        JSON.stringify([...cartItems, newCartItem]),
      );
    }
  };
  useEffect(() => {
    const getArray = JSON.parse(localStorage.getItem('minhaArraySalva'));
    if (getArray) {
      setCartItems(getArray);
    } else {
      localStorage.setItem('minhaArraySalva', JSON.stringify(cartItems));
    }
  }, []);
  return (
    <AllContexts.Provider
      value={{
        searchValue,
        setSearchValue,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
        totalQuant,
        setTotalQuant,
        maxValue,
        setMaxValue,
        minValue,
        setMinValue,
        products,
        setProducts,
        appliedFilters,
        setAppliedFilters,
        filteredProducts,
        setFilteredProducts,
        popop,
        setPopop,
        arrayCartLocal,
        setArrayCartLocal,
        addItemToCart,
      }}
    >
      {children}
    </AllContexts.Provider>
  );
};

export { AllContexts, AllProvider };
