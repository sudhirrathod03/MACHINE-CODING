import React, { useState } from "react";
import styles from "./multiselect.module.css";

const inputs = [
  { id: 1, value: "checkbox 1", checked: false },
  { id: 2, value: "checkbox 2", checked: false },
  { id: 3, value: "checkbox 3", checked: false },
  { id: 4, value: "checkbox 4", checked: false },
  { id: 5, value: "checkbox 5", checked: false },
];
function MultiSelect() {
  const [select, setSelect] = useState(inputs);

  const handleChange = (id) => {
    setSelect((prev) =>
      prev.map((box) =>
        box.id === id ? { ...box, checked: !box.checked } : box
      )
    );
  };

  const handleSelectAll = () => {
    setSelect((prev) =>
      prev.map((box) => ({
        ...box,
        checked: !allSelected,
      }))
    );
  };

  const allSelected = select.every((item) => item.checked);

  return (
    <>
      <div className={styles.multicontainer}>
        <h2 className={styles.title}>Multi-Select</h2>

        <p className={styles.description}>
          Select one or more options from the list.
        </p>

        <label className={`${styles.mlabel} ${styles.selectAll}`}>
          <strong>Select All</strong>

          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={handleSelectAll}
            checked={allSelected}
          />
        </label>

        {select.map((input) => (
          <label key={input.id} className={styles.mlabel}>
            {input.value}

            <input
              type="checkbox"
              className={styles.checkbox}
              checked={input.checked}
              onChange={() => handleChange(input.id)}
            />
          </label>
        ))}
      </div>
    </>
  );
}

export default MultiSelect;
