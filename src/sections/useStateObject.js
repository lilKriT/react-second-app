import React, { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  return <h2>useStateObject</h2>;
};

export default useStateObject;
