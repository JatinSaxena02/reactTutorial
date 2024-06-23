import "../src/index.css";
import {useState } from "react";
import Card from "./components/Card";
import Bgchanger from "./components/Bgchanger";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  //  Counter implementation

  /* 
 let [counter, setCounter] = useState(0);

  const incrementValue = () => {
    counter = counter + 1;
    setCounter(counter);
    setCounter(counter);
    setCounter(counter);
    setCounter(counter);
  };

  const decrement = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>Counter : {counter}</div>
      <div style={{ margin: "10px" }}>
        <button onClick={incrementValue}>Increment value</button>
        <button onClick={decrement}>Decrement value</button>
      </div>
      <Card username="Jatin Saxena" btnText="Click me"/>
      <Card username="Raj Saxena"/>
    </>
  );

  */

  return (
    // <>
    //   <Bgchanger/>
    //   <PasswordGenerator/>
    //   <CurrencyConvertor/>
    // </>

    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  );
}

export default App;
