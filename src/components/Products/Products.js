import fetchProducts from '../../api/fetchProducts';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import Filter from '../Filter/Filter';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';
import React, { useState, useEffect, useContext } from 'react';

function Products() {
  const [loading, setLoading] = useState(true);
  let {
    searchValue,
    setSearchValue,
    products,
    setProducts,
    appliedFilters,
    setAppliedFilters,
    filteredProducts,
    setFilteredProducts,
  } = useContext(AllContexts);
  if (searchValue === '') {
    setSearchValue('tecnologia');
  }

  useEffect(() => {
    fetchProducts(searchValue).then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [searchValue]);

  useEffect(() => {
    setFilteredProducts(products.filter((item) => {
      return (
        (appliedFilters.minValue === '' ||
          item.price > appliedFilters.minValue) &&
        (appliedFilters.maxValue === '' || item.price < appliedFilters.maxValue)
      );
    }));
  }, [appliedFilters, products]);

  
  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Filter />
          <section className="products container">
            {filteredProducts.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default Products;
