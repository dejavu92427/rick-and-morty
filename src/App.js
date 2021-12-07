import React from "react";
import Intro from "./components/intro/Intro";
import "./app.css";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
function App() {
  return (
    <>
      <div className="gradient_bgg">
        <Intro />
        <About />
        <ProductList />
      </div>
    </>
  );
}

export default App;
