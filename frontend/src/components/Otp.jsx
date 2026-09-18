import { useState, useRef, useEffect } from "react";
import "../styles/otp.css";
function Otp({ otpLength = 6 }) {
  const [otp, setOtp] = useState(Array.from({ length: otpLength }).fill(""));
  const inputRef = useRef([]);
  const handleChange = (e, idx) => {
    let value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    const copyOtp = [...otp];
    copyOtp[idx] = value;
    if (idx < otp.length - 1) {
      inputRef.current[idx + 1].focus();
    }
    setOtp(copyOtp);
  };

  const handleKey = (e, idx) => {
    if (e.key === "Backspace") {
      e.preventDefault(); 
      const copyOtp = [...otp];
      copyOtp[idx] = ""; 
      setOtp(copyOtp);
      if (idx > 0 && inputRef.current[idx - 1]) {
        inputRef.current[idx - 1].focus();
      }
    }
  };
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <>
      <div className="otp-container">
        <h1>ENTER OTP</h1>
        <div className="otp-inputs">
          {otp.map((value, idx) => (
            <input
              type="text"
              value={value}
              key={idx}
              onChange={(e) => handleChange(e, idx)}
              ref={(el) => (inputRef.current[idx] = el)}
              onKeyDown={(e) => handleKey(e, idx)}
              maxLength={1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Otp;
