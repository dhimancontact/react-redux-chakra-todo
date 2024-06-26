import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductView from './components/ProductView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing/>} />
        <Route path="/product/:id" element={<ProductView/>} />
      </Routes>
    </Router>
  );
};

export default App;
