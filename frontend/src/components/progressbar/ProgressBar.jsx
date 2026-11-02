import React, { useEffect, useState } from "react";
import styles from "./progressbar.module.css";

function ProgressBar() {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setinterval running");

      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
        }
        return Math.min(prev + 5, 100);
      });
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressHeading}>
        <h1>Progress Bar</h1>
      </div>
      <div className={styles.progressBarContainer}>
         <span style={{ zIndex: 1, fontWeight: "bold" }}>{bar}%</span>
        <div
          className={styles.progressBar}
          style={{ transform: `translateX(${bar - 100}%)` }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
