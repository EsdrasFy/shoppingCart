import './Filter.css';
import {
  BsMoon,
  BsMoonFill,
  BsSun,
  BsSunFill,
  BsArrow90DegRight,
} from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { useState } from 'react';
import { useContext } from 'react';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
export default function Filter() {
  const [showDivFilters, setShowDivFilters] = useState(false);
  const {
    maxValue,
    setMaxValue,
    minValue,
    setMinValue,
    setAppliedFilters,
    filteredProducts,
    setFilteredProducts,
    products,
    popop,
    setPopop,
  } = useContext(AllContexts);
  const originaArray = [...products];
  const submitMinMax = (e) => {
    e.preventDefault();
    setAppliedFilters({
      minValue,
      maxValue,
    });
  };

  const sortMostValue = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price,
    );
    setFilteredProducts(sortedProducts);
  };

  const sortLowerValue = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price,
    );
    setFilteredProducts(sortedProducts);
  };

  const clearFilters = () => {
    setMaxValue('')
    setMinValue('')
    setFilteredProducts(originaArray);
  };
  const sortMostRecent = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (a.date_created && b.date_created) {
        if (a.date_created !== b.date_created) {
          return a.date_created.localeCompare(b.date_created);
        }
      }
      return a.title.localeCompare(b.title);
    });
    setFilteredProducts(sortedProducts);
  };
  const sortLowerRecent = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (b.date_created && a.date_created) {
        if (b.date_created !== a.date_created) {
          return b.date_created.localeCompare(a.date_created);
        }
      }
      return b.title.localeCompare(a.title);
    });
    setFilteredProducts(sortedProducts);
  };
  const showPop = () => {
    setPopop(true);
    setTimeout(() => {
      setPopop(false);
    }, 3000);
  };
  return (
    <section className="container cont">
      <nav className="navbar">
        <div
          className="filters"
          onClick={() => setShowDivFilters(!showDivFilters)}
        >
          <button>Filtros</button>
          <GiSettingsKnobs className="iconFilter" />
        </div>
        <div className="toggleMode">
          <input type="checkbox" className="checkbox" id="chk" onClick={showPop}/>
          <label className="label" htmlFor="chk">
            <BsMoon className="moon" />
            <BsSun className="sun" />
            <div className="ball"></div>
          </label>
        </div>
      </nav>
      <div className={`containerFilters ${showDivFilters ? 'open' : ''}`}>
        <div>
          <h1>Condição</h1>
          <ul>
            <li onClick={showPop}>Novo</li>
            <li onClick={showPop}>Usado</li>
            <li onClick={showPop}>Recondicionado</li>
          </ul>
        </div>
        <div>
          <h1>Data de Postagem</h1>
          <ul>
            <li onClick={clearFilters}>Mais Relevantes</li>
            <li onClick={sortMostRecent}>Mais recentes</li>
            <li onClick={sortLowerRecent}>Mais Antigos</li>
          </ul>
        </div>
        <div>
          <h1>Ordenar Por</h1>
          <ul>
            <li onClick={clearFilters}>Mais Relevantes</li>
            <li onClick={sortLowerValue}>Menor Valor</li>
            <li onClick={sortMostValue}>Maior Valor</li>
          </ul>
        </div>
        <div className="order">
          <h1>Filtrar Por</h1>
          <p>Preço:</p>
          <form onSubmit={submitMinMax}>
            <input
              type="text"
              placeholder="min"
              value={minValue}
              onChange={(e) => setMinValue(e.target.value)}
              required
            />{' '}
            <span>-</span>
            <input
              type="text"
              placeholder="max"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
              required
            />
            <button type="submit" className="subValues">
              <BsArrow90DegRight />
            </button>
          </form>
          <div><button className='limparFiltros' onClick={clearFilters}>LIMPAR FILTROS</button></div>
        </div>
      </div>
    </section>
  );
}
