import React, { useState } from "react";

const AddContact = (props) => {
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
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Contact Email"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
