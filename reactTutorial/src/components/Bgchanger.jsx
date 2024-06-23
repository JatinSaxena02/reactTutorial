import React, { useEffect, useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState(()=>{
    return localStorage.getItem("bgColor")|| "red";
  });

  useEffect(()=>{
    localStorage.setItem("bgColor",color);
  },[color]);

  const colorDetails = [
    { name: "green", change: "green" },
    { name: "red", change: "red" },
    { name: "yellow", change: "yellow" },
    { name: "pink", change: "pink" },
  ];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap px-2 justify-center absolute inset-x-0 rounded-xl" style={{top:'650px'}}>
        <div className="flex flex-wrap justify-center rounded-xl py-2 px-3 gap-3 bg-white">
          {colorDetails.map((e) => (
            <button
              key={e.name}
              className="outline-none  rounded-full px-4 py-1 text-white shadow-lg"
              style={{ backgroundColor: e.name }}
              onClick={() => setColor(e.change)}
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bgchanger;
