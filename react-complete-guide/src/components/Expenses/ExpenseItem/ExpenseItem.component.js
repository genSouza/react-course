/* eslint-disable react/prop-types */
import React, { useState } from "react";
import CardComponent from "../../UI/Card.component";
import ExpenseDateComponent from "../ExpenseDate/ExpenseDate.component";
import "./ExpenseItem.css";

function ExpenseItemComponent(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!");
  };
  
  return (
    <CardComponent className="expense-item">
      <ExpenseDateComponent date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </CardComponent>
  );
}

export default ExpenseItemComponent;
