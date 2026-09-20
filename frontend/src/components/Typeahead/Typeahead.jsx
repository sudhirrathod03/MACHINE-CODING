import React, { useEffect, useState } from "react";
import "./typeahead.css";
function Typeahead() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`
      );

      const data = await res.json();
      setResult(data.products);
      console.log(data);
    }
    fetchProducts();
  }, [query]);

  return (
    <>
      <div className="typeahead-container">
        <h1>Typeahead</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Serach products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="result">
          <ul>
            {result.map((product) => (
              <li key={product.id}> {product.title} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Typeahead;
