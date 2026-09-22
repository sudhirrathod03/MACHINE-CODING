import React, { useEffect, useState, useRef } from "react";
import styles from "./typeahead.module.css";

const initialValue = {
  loading: false,
  error: null,
};

function Typeahead() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState(initialValue);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [dropDown, setDropDown] = useState(true);

  const cache = useRef({});
  //debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  //api call
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResult([]);
      setStatus(initialValue);
      return;
    }

    const controller = new AbortController();

    async function fetchProducts() {
      try {
  
        setStatus((prev) => ({ ...prev, loading: true }));

        if (cache.current[debouncedQuery]) {
          console.log("FROM CACHE");
          setResult(cache.current[debouncedQuery]);
          setStatus((prev) => ({ ...prev, loading: false }));
          return;
        }

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${encodeURIComponent(
            debouncedQuery
          )}&limit=10`,
          { signal: controller.signal }
        );

        console.log("FROM API");

        const data = await res.json();
        setResult(data.products);
        cache.current[debouncedQuery] = data.products;
        setStatus((prev) => ({ ...prev, loading: false }));
      } catch (error) {

        if (error.name === "AbortError") {
          console.log("Request cancelled for:", debouncedQuery);
          return; 
        }
        setStatus((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    }
    fetchProducts();

    return () => {
      controller.abort()
    };
  }, [debouncedQuery]);

  const handleSelect = (product) => {
    setQuery(product);
    setDropDown(false);
  };

  return (
    <>
      <div className={styles["typeahead-container"]}>
        <h1 className={styles.heading}>Typeahead</h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Serach products"
            value={query}
            onChange={(e) => {
              setDropDown(true);
              setQuery(e.target.value);
            }}
            className={styles.tinput}
          />
        </div>

        {dropDown && query.trim() !== "" && (
          <>
            {query !== debouncedQuery || status.loading ? (
              <p>Loading...</p>
            ) : status.error ? (
              <p>Error: {status.error}</p>
            ) : result.length === 0 ? (
              <p>No results found</p>
            ) : (
              <div className={styles.result}>
                <ul>
                  {result.map((product) => (
                    <li
                      key={product.id}
                      onClick={() => handleSelect(product.title)}
                    >
                      {product.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Typeahead;
