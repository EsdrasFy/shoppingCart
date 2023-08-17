import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import InfoProduct from './components/InfoProduct/InfoProduct';
import Cart from './components/Cart/Cart';
import PopopCondition from './components/PopopCondition/PopopCondition';
import { useContext } from 'react';
import { AllContexts } from './contexts/AllContexts/AllContexts';

function App() {
  const {popop} =useContext(AllContexts)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/produto/:id" element={<InfoProduct/>} />
      </Routes>
      <Cart/>
      {popop && <PopopCondition/>}
      
    </>
  );
}

export default App;
