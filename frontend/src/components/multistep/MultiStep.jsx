import { React, useState } from "react";
import styles from "./multistep.module.css";
function MultiStep({ pages = 5 }) {
  const totalPages = Array.from({ length: pages }, (_, idx) => ({
    pageNo: `${idx + 1}`,
    id: idx,
    content:``
  }));

  const [currentStep, setCurrentStep] = useState(0);

  const goToPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  console.log(currentStep);
  const goToNext = () => {
          console.log(currentStep);
    if (currentStep < totalPages.length - 1) {
      console.log(currentStep);

      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.multistepContainer}>
        <h1 style={{marginBottom:"10px"}}>Multi-step Form</h1>
      <div>
        {totalPages.map((page) => (
          <div key={page.id}>
            <div
              className={`${styles.pages} ${currentStep >= page.id ? styles.active : ""} `}
            >
              {page.pageNo}
            </div>
            <div
              className={`${styles.line} ${currentStep > page.id ? styles.active : ""} `}
            ></div>
          </div>
        ))}
      </div>

      <div>
        <button className={styles.btn} onClick={goToPrev}>Prev</button>
        <button className={styles.btn} onClick={goToNext}>Next</button>
      </div>
    </div>
  );
}

export default MultiStep;
