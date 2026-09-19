import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Pagination from "./components/Pagination";
import Otp from "./components/Otp";
import Carousel from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Carousel />
    </>
  );
}

export default App;
