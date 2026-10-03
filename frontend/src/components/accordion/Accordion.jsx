import style from "./accordion.module.css";
import React, { useState } from "react";

const data = Array.from({ length: 5 }, (_, idx) => ({
  id: idx,
  title: `Option ${idx + 1}`,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat sunt ad praesentium id.",
  isOpen: false,
}));

function Accordion() {
  const [accordion, setAccordion] = useState(data);

  const handleClick = (id) => {
    setAccordion((prev) =>
      prev.map((option) =>
        option.id === id
          ? { ...option, isOpen: !option.isOpen }
          : option
      )
    );
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Accordion Component</h1>

      <div className={style.accordion}>
        {accordion.map((option) => (
          <div
            key={option.id}
            className={`${style.option} ${
              option.isOpen ? style.active : ""
            }`}
          >
            <div
              className={style.header}
              onClick={() => handleClick(option.id)}
            >
              <span>{option.title}</span>

              <span
                className={`${style.arrow} ${
                  option.isOpen ? style.rotate : ""
                }`}
              >
                ▼
              </span>
            </div>

            {option.isOpen && (
              <div className={style.content}>
                <p>{option.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;