import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    count != 0 ? setCount(count - 1) : alert("Sorry");
  };
  return (
    <div>
      Count value is : {count} <button onClick={Increment}>Increment</button>{" "}
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
