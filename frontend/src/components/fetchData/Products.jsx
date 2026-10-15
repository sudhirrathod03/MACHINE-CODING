import React, { useEffect, useState } from "react";
import style from "./products.module.css";

const BASE_URI = "https://dummyjson.com";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      async function fetchProducts() {
        const res = await fetch(`${BASE_URI}/products`);
        const data = await res.json();
    setProducts(data.products)
      }
      fetchProducts();
    } catch (error) {
      console.log(error.message);
    }
  },[]);

  return (
    <>
      <div className={style.container}>
        {products.map((prod) => (
           <div key={prod.id} className={style.box}>
            <h2> {prod.title} </h2>
            <p>{prod.description}</p> 
            
            <span> $ {prod.price} </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
