import React from "react";
import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

function ProductList() {
  console.log(products);
  return (
    <>
      <div className="pl">
        <div className="pl-text">
          <h1 className="pl-title">Claymation short films</h1>
          <p className="pl-desc">
            In 2017, Adult Swim released a series of claymation short films called Rick and Morty: The Non-Canonical Adventures on YouTube. They were
            created by Lee Hardcastle, and parody films in the horror and science fiction genres.[1
          </p>
        </div>
        <div className="pl-list">
          {products.map((v, i) => {
            return <Product img={v.img} link={v.link} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
