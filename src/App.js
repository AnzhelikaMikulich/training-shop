import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage";
import ClothesWomen from "./pages/ClothesWomen";
import ClothesMen from "./pages/ClothesMen";
import { PRODUCTS } from "./constants/data";

function App() {
  const ProductPageRoutes = Object.values(PRODUCTS).map((items) =>
    items.map((item) => (
      <Route
        exact
        path={`/${item.category}/${item.id}`}
        key={item.id}
        element={<ProductPage product={item} type={item.category}  />}
      />
    ))
  );

  return (
    <HashRouter>
      <div className="app" data-test-id="app">
        <div className="wrapper">
          <Header></Header>

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/women" element={<ClothesWomen />} />
            <Route exact path="/men" element={<ClothesMen />} />
            {ProductPageRoutes}
          </Routes>

          <Footer></Footer>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
