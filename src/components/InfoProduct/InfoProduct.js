import React, { useEffect, useState } from 'react';
import fetchInfo from '../../api/fetchInfo';
import Loading from '../Loading/Loading';
import './InfoProduct.css';
import PageProduct from '../PageProduct/PageProduct';
import { useParams } from 'react-router';

function InfoProduct() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [infoProduct, setInfoProduct] = useState([]);
  useEffect(() => {
    fetchInfo(id).then((response) => {
      setInfoProduct(response);
      setLoading(false);
    });
  }, [id]);
  const getThumbnailUrl = () => {
    if (infoProduct && infoProduct.thumbnail) {
      const originalUrl = infoProduct.thumbnail;
      const modifiedUrl = originalUrl.replace(/I\.jpg$/, 'W.jpg');
      return modifiedUrl;
    }
    return null;
  };
  const calculateOldPrice = (currentPrice) => {
    const discountPercentage = 10;
    const discountAmount = (currentPrice * discountPercentage) / 100;
    const result = currentPrice + discountAmount;
    return parseFloat(result.toFixed(2));
  };
  const calculateInstallment = (installment) => {
    const valueInstallment = installment / 10;
    return parseFloat(valueInstallment.toFixed(2));
  };
  return (
    <div className="container product-info">
      {loading ? (
        <Loading />
      ) : (
        <PageProduct
          data={infoProduct}
          oldPrice={calculateOldPrice(infoProduct.price)}
          installment={calculateInstallment}
          thumbnail={getThumbnailUrl(infoProduct.thumbnail)}
        />
      )}
    </div>
  );
}

export default InfoProduct;
