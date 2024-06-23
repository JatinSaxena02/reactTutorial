import { useEffect, useState } from "react";

export default function Message() {
  const [color, setColor] = useState("blue");
  const ShowMessage = () => {
    setColor("white");
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <button onClick={ShowMessage}>Click here to get message</button>
    </div>
  );
}
