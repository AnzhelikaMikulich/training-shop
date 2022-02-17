import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/ProductPage';
import ClothesWomen from './pages/ClothesWomen';
import ClothesMen from './pages/ClothesMen';


function App() {
  return (
    <HashRouter>
      <div className="app" data-test-id='app'>
      <div className="wrapper">
      <Header></Header>

      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/women" element={<ClothesWomen />} />
          <Route exact path="/men" element={<ClothesMen />} />
          <Route exact path="/women/1" element={<ProductPage type="women"/>} />
          <Route exact path="/men/1" element={<ProductPage type="men"/>} />
        </Routes>
        
    <Footer></Footer>
  </div>
    </div>
    </HashRouter>
    
    
  );
}

export default App;
