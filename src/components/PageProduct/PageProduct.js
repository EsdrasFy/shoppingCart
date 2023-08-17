import React, { useContext, useState } from 'react';
import {
  AiFillThunderbolt,
  AiOutlineDown,
  AiOutlineCreditCard,
} from 'react-icons/ai';
import Caixa from '../../images/caixa.svg';
import Visa from '../../images/visa.svg';
import Elo from '../../images/elo.svg';
import Boleto from '../../images/boleto.svg';
import Hpc from '../../images/hpc.svg';
import Mstc from '../../images/mstc.svg';
import Mlc from '../../images/mlc.svg';
import formatCurrency from '../../utils/formatCurrency';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import './PageProduct.css';
function PageProduct({ data, oldPrice, installment, thumbnail }) {
  const { title, price, description, pictures } = data;
  const [selectedImage, setSelectedImage] = useState(null);
  const { cartItems, setCartItems } = useContext(AllContexts);
  const handleAddCart = (data) => {
    const existingProduct = cartItems.find((item) => item.id === data.id);
    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...data, quantity: 1 }]);
    }
  };
  const handleImageClick = (picture) => {
    setSelectedImage(picture.url);
    console.log(data)
  };

  return (
    <div className="product-infos">
      <div className="topSide">
        <div className="leftSide">
          <div className="assessmentResp">
            <div>
              <p>Novo | +1000 vendidos</p>
              <p className="starRating">
                4.9 <span>⭐⭐⭐⭐⭐</span>
              </p>
            </div>
            <div className="titlePageInfosResp">
              <h1>{title}</h1>
            </div>
          </div>
          <div
            className="imgMainDisplay"
            style={{
              backgroundImage: `url(${
                selectedImage ? selectedImage : thumbnail
              })`,
            }}
          />
          <div className="imgsDisplay">
            {pictures &&
              pictures.slice(0, 4).map((picture, idx) => (
                <div
                  key={idx}
                  className={`thumbnail ${
                    selectedImage === picture.url && 'active'
                  }`}
                >
                  <img
                    src={picture.url}
                    alt={`Imagem ${idx}`}
                    onClick={() => handleImageClick(picture)}
                  />
                </div>
              ))}
          </div>
          <div className="saleInfos">
            <p>{formatCurrency(oldPrice, 'BRL')}</p>
            <p>{formatCurrency(price, 'BRL')}</p>
            <p>em 10x R$ {installment} sem juros</p>

            <p>Ver os meios de pagamento</p>
          </div>
          <div className="store">
            <p>
              Vendido Oficialmente pelo <span>Mercado Livre</span>
            </p>
            <p>+100mil vendas</p>
          </div>
          <div className="stock">
            <b>Estoque disponivel</b>
            <p>
              Armazenado e enviado pelo{' '}
              <span>
                <AiFillThunderbolt />
                FULL
              </span>
            </p>
          </div>
        </div>
        <div className="rightSide">
          <div className="assessment">
            <div>
              <p>Novo | +1000 vendidos</p>
              <p className="starRating">
                4.9 <span>⭐⭐⭐⭐⭐</span>
              </p>
            </div>
            <div className="titlePageInfos">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="box">
            <div className="moreInfoFrete">
              <div>
                <p className="stytleFontGreen">Chegará grátis amanhã</p>
                <p>
                  Comprando dentro dos próximos <b>58 min</b>
                </p>
              </div>
              <div>
                <p className="stytleFontGreen">
                  Retire grátis a partir de amanhã
                </p>
                <p>
                  em uma agência Mercado Livre Comprando dentro das próximas{' '}
                  <b>3 h 58 min</b>
                </p>
                <p className="seeMap">Ver no mapa</p>
              </div>
            </div>
            <div className="consultFrete">
              <p>Consulte o prazo de entrega</p>
              <input type="text" placeholder="CEP" />
            </div>
            <div className="amount">
              <p>
                Quantidade:{' '}
                <b>
                  <span>1</span> Unidade <AiOutlineDown className="setadown" />
                </b>
              </p>
            </div>
            <div className="buyOrAddCart">
              <div>
                <button className="buy">COMPRAR AGORA</button>
              </div>
              <div>
                <button className="AddCart" onClick={() => handleAddCart(data)}>
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSide">
        <div className="description">
          <h1>Descrição</h1>
          <p>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vero temporibus dolorem minima placeat impedit consequatur suscipit iusto ducimus iste ullam ratione eum quibusdam cupiditate modi culpa molestias porro id ea harum. Quis voluptatum necessitatibus iste placeat explicabo libero odio modi, a quo adipisci. Optio dignissimos error inventore eveniet repellendus sit, ducimus neque, exercitationem eius fuga ea, aut non recusandae expedita atque consequatur! Quas reiciendis excepturi itaque autem illum nesciunt blanditiis suscipit eos, distinctio debitis delectus, sapiente odio eaque cum voluptas sunt expedita. Dolorum accusamus veritatis omnis nam laborum, facilis excepturi impedit consectetur nihil vel necessitatibus, minima corporis! Natus iste saepe sit blanditiis consequatur vitae non quasi voluptas molestiae totam dicta culpa dolores facilis distinctio nemo commodi, aut dolorum pariatur cum ab adipisci doloremque minima sequi deleniti? Quis voluptatum, architecto delectus obcaecati dolorum illum eligendi aperiam error dignissimos, omnis optio tempora quae veniam nobis deleniti sequi atque. Expedita voluptate culpa dolor. Obcaecati voluptas ex provident dolorem rem dolorum tempore exercitationem culpa asperiores error cum nisi quam sapiente, earum ut placeat. Explicabo, temporibus atque aut dolor quae, eius dignissimos nihil odio ea ipsum repellendus laudantium reprehenderit, natus tempore saepe aliquid qui culpa autem quos animi quas quis distinctio debitis? Rerum, expedita.'}
          </p>
        </div>
        <div className="paymentMethods">
          <div className="asidePay">
            <h1>Meios de Pagamento</h1>
            <button>
              <AiOutlineCreditCard className="iconCredit" />
              PARCELE EM ATÉ 18x
            </button>
            <p></p>
          </div>
          <div className="credit12x">
            <h4>Até 12x em Cartão de crédito</h4>
            <p>
              <img src={Mlc} alt="Mercado Crédito Logo" />
            </p>
          </div>
          <div className="cardsCredit">
            <h4>Cartões de crédito</h4>
            <div>
              <span>
                <img src={Visa} alt="Visa" />
              </span>
              <span>
                <img src={Mstc} alt="MAster Card" />
              </span>
              <span>
                <img src={Hpc} alt="HyperCard" />
              </span>
              <span>
                <img src={Elo} alt="Elo" />
              </span>
            </div>
          </div>
          <div className="debitcard">
            <h4>Cartões de débito</h4>
            <span>
              <img src={Caixa} alt="Caixa" />
            </span>
          </div>
          <div className="boleto">
            <h4>Boleto bancário</h4>
            <span>
              <img src={Boleto} alt="Boleto" />
            </span>
          </div>
          <div className="meetPay">
            <p>Conheça outros meios de pagamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageProduct;
