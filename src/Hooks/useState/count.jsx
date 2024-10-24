import React, { useState } from "react"

export default function Count() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  const increment = () => {
    // setCount(count + 1);
    let i = count;
    if (i <= 10) {
      setCount(i + 1);
    }
  };
  const decrement = () => {
    // setCount(count + 1);
    let i = count;
    if (i >= 0) {
      setCount(i - 1);
    }
  };

  const changeColor = () => {
    setColor(color === "red" ? "green" : "red");
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment }>Button</button>
      <button onClick={decrement }>Button</button>
      
      <div>
        <h1 >Hello World</h1>
        <button onClick={changeColor}>Change Color</button>
      </div>

      
    </>
  );
}
