import React, { useState } from "react";
import "../styles/pagination.css";
function Pagination() {
  const [currentPage, setCurrentPage] = useState(4);

  const data = Array.from({ length: 100 }, (_, idx) => ({
    id: idx,
    title: `item number ${idx + 1}`,
  }));
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const endingIndex = itemsPerPage * currentPage;
  console.log("EI:", endingIndex);

  const prevThreePages = Array.from(
    { length: 3 },
    (_, idx) => currentPage - 1 - idx
  )
    .filter((pages) => pages > 0)
    .reverse();

  const nextThreePages = Array.from(
    { length: 3 },
    (_, idx) => currentPage + 1 + idx
  ).filter((page) => page < totalPages);

  const pages = [...prevThreePages, currentPage, ...nextThreePages];
  console.log(pages);

  const startingIndex = endingIndex - itemsPerPage;
  console.log("SI:", startingIndex);

  const currentItems = data.slice(startingIndex, endingIndex);

  /*
  
1st page - >  si(1), ei(10)
2nd page -> si(11), ei(20)

 */

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  function handlePage(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <div className="container">
        <div className="pagination">
          <h1>Pagination</h1>
          <div className="items">
            <ul>
              {currentItems.map((item) => (
                <li key={item.id}> {item.title} </li>
              ))}
            </ul>
          </div>

          <div className="btn-container">
            <button
              className="btn prev-btn"
              disabled={currentPage === 1}
              onClick={goToPrev}
            >
              Prev
            </button>

            {pages.map((page) => (
              <button className={page === currentPage ? 'active btn' : 'btn'} onClick={() => handlePage(page)}>
                {" "}
                {page}{" "}
              </button>
            ))}

            <button
              className="btn next-btn"
              disabled={currentPage === totalPages}
              onClick={goToNext}
            >
              {" "}
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagination;
