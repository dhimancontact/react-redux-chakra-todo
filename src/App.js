import React from "react";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Header from "./containers/Headers";
import { ProductDetail } from "./containers/ProductDetail";
import { ProductListing } from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productID" element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
