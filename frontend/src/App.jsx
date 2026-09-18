import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import Otp from "./components/Otp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Otp />
    </>
  );
}

export default App;
