import React, { useState, useEffect } from "react";

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </>
  );
};

export default useEffectCleanup;
