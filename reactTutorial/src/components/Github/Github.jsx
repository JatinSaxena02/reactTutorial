import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data=useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/jatinsaxena02")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4  p-4 justify-center bg-gray-600 text-white text-3xl">
      Github Following :{data.following}
      <img  className="m-auto p-4" src={data.avatar_url} alt="img" width={300}/>
    </div>
  );
};

export default Github;


export const githubinfoLoader = async()=>{
    const responce= await fetch('https://api.github.com/users/jatinsaxena02');
    return responce.json();
} 
