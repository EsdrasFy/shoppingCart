import React, { createContext, useState } from 'react';

const AllContexts = createContext();

const AllProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState();
  const [cartItems, setCartItems] = useState([]);
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
      }}
    >
      {children}
    </AllContexts.Provider>
  );
};

export { AllContexts, AllProvider };
