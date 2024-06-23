import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`fullname : ${name.firstName} ${name.lastName}`);
  };
  return (
    <div>
      {name.firstName}-{name.lastName}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name.firstName}
          placeholder="FirstName"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          placeholder="LastName"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
