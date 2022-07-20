import { useState } from "react";

const useStateBasic = () => {
  const [text, setText] = useState("Old title");

  const handleClick = () => {
    if (text === "Old title") {
      setText("Changed title");
    } else {
      setText("Old title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default useStateBasic;
