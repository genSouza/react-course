import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from './AddUser.module.css';

const addUserHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input type="text" id="username"></input>
      <label htmlFor="age">Age (years)</label>
      <input type="number" id="age"></input>
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
