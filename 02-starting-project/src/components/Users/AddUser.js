import React from "react";

const addUserHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input type="text" id="username"></input>
      <label htmlFor="age">Age (years)</label>
      <input type="number" id="age"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
