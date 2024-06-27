import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [user,addUser] = useState({name:"",age:""});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newuser={name,age};
    addUser(newuser);
    console.log(newuser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="age">Age</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button type="submit">Add user</button>
    </form>
  );
}

export default Form;
