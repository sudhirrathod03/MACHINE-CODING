
import styles from "./vertualization.module.css";
import React, { useState } from "react";

function Vertualization() {
  const data = Array.from({ length: 100 }, (_, idx) => ({
    id: idx,
    title: `Item number ${idx + 1}`,
  }));

  const [scrollTop, setScrollTop] = useState(0);

  const itemHeight = 50;
  const containerHeight = 500;

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount, data.length);

  const totalHeight = itemHeight * data.length;
  const visibleItems = data.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  function handleTop(e) {
    setScrollTop(e.currentTarget.scrollTop);
  }

  return (
    <>
      <div className={styles.outerContainer}>
        <h1>Virtualization</h1>

        <div
          className={styles.listContainer}
          onScroll={handleTop}
          style={{ height: containerHeight, overflowY: "auto" }}
        >
          <div style={{ height: totalHeight }}>
            <div style={{ transform: `translateY(${offsetY}px)` }}>
              {visibleItems.map((item) => (
                <div
                  className={styles.items}
                  key={item.id}
                  style={{ height: itemHeight, boxSizing: "border-box" }}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vertualization;
