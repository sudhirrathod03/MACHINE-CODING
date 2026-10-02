import "./accordion.module.css";
import React, { useState } from "react";

const data = Array.from({ length: 5 }, (_, idx) => ({
  id: idx,
  title: `option ${idx + 1}`,
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil quaerat sunt ad praesentium id.",
  isOpen: false,
}));

function Accordion() {
  const [accordion, setAccordion] = useState(data);

  const handleClick = (id) => {
    setAccordion((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, isOpen : !option.isOpen } : option
      )
    );
  };

  return (
    <>
      <div>
        {accordion.map((option) => (
          <div key={option.id} className="hi">
            <span onClick={() => handleClick(option.id)}> {option.title}  ▼ </span>
            {option.isOpen && <p> {option.description} </p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordion;
