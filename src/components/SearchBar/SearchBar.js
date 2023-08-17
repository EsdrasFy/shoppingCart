import './SearchBar.css';
import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AllContexts } from '../../contexts/AllContexts/AllContexts';
import { useNavigate } from 'react-router-dom';
function SearchBar() {
  const navigate = useNavigate();
  const { setSearchValue } = useContext(AllContexts);

  const [searchInput, setSearchInput] = useState('');

  const saveSearch = (e) => {
    e.preventDefault();
    setSearchValue(searchInput);
    navigate(`/`);
    setSearchInput('');

  };
  return (
    <form className="search-bar" onSubmit={saveSearch}>
      <input
        type="search"
        placeholder="Buscar Produtos"
        className="search__input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
