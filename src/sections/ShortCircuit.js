import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "This shows if text is empty"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {isError ? <h1>Error...</h1> : <h1>Everything is fine</h1>}
    </>
  );
};

export default ShortCircuit;
