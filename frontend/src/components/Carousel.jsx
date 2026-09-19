import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import imageData from "../service/images.json";

console.log(imageData[1].download_url);
function Carousel() {
  const [currentImage, setCurrentImage] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  const goToPrev = () => {
    setCurrentImage((prev) => {
      if (prev === 0) {
        return imageData.length - 1;
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentImage((prev) => {
      if (prev == imageData.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    let intervalId = setInterval(goToNext, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered]);

  return (
    <>
      <h1>IMAGE CAROUSEL</h1>
      <div
        className="container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="left-btn" onClick={goToPrev}>
          {" "}
          {"<"}{" "}
        </div>

        <img src={imageData[currentImage].download_url} alt="" />

        <div className="right-btn" onClick={goToNext}>
          {">"}{" "}
        </div>
      </div>
    </>
  );
}

export default Carousel;
