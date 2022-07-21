import React from "react";
import { useState, useEffect } from "react";

const useEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("use effect");
    document.title = `New Messages: ${value}`;
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default useEffectBasic;
