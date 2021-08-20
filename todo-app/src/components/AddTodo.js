import React, { useState } from "react";

const AddTodo = (props) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  let { name, email } = input;

  const add = (e) => {
    e.preventDefault();
    if (name === "" && email === "") {
      alert("All fields are mandatory");
      return;
    }
    props.addContactHandler({ ...input });
    setInput({ name: "", email: "" });

  };
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="ui main">
      <h2>Add Todo</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Todo Title"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Todo Title"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
