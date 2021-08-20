import React from "react";
import TodoCard from "./TodoCard";

const Todo = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <TodoCard 
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default Todo;
