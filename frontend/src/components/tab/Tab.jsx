import React, { useState } from "react";
import styles from "./tab.module.css";
function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const data = Array.from({ length: 5 }, (_, idx) => ({
    id: idx,
    content: `content for tab ${idx + 1}`,
    tabNo: `tab ${idx + 1}`,
  }));

  const handleTabs = (idx) => {
    setCurrentTab(idx);
  };

  return (
    <>
      <div className={styles.tabmainContainer}>
        <h1>TAB SWITCHER</h1>
        <div className={styles.tabContainer}>
          {data.map((tabs, idx) => (
            <div
              onClick={() => handleTabs(tabs.id)}
              className={`${styles.tabs} ${currentTab === idx ? styles.active : ""}`}
              key={tabs.id}
            >
              {" "}
              {tabs.tabNo}{" "}
            </div>
          ))}
        </div>

        <div className={styles.contents}>
          <p> {data[currentTab].content} </p>
        </div>
      </div>
    </>
  );
}

export default Tab;
