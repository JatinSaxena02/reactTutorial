import React, { useCallback, useEffect, useState, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //  useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  const passwordref = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    //  in this function we are coping the password on thr clipboard, and we have used useRef hook so that we can store thr reference of object/element in the passwordref variable but before using it we have to pass it where we have to use it like this(ref={passwordref}). for ex-- i've to take a refrence from input field where the password is displayed.
    
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@$%&*()+{}[]~`";
    }

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      console.log(pass);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl justify-center flex mt-10">Password Generator</h1>
      <div className="box-1 flex justify-center mt-6">
        <input
          type="text"
          placeholder="password"
          value={password}
          readOnly
          ref={passwordref}
          className="shadow rounded-lg bg-white shadow-gray-800 outline-none"
        />
        <button
          onClick={copyPasswordToClipboard}
          className="rounded-lg shrink-0 bg-white outline-none text-black px-2 py-1 m-0"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-center">
        <input
          type="range"
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
          min={6}
          max={50}
        />
        Length({length})
        <input
          defaultChecked={number}
          type="checkbox"
          onChange={() => {
            setNumber((prev) => !prev);
          }}
        />
        number
        <input
          type="checkbox"
          defaultChecked={character}
          onChange={() => {
            setCharacter((prev) => !prev);
          }}
        />
        character
      </div>
    </>
  );
};

export default PasswordGenerator;
