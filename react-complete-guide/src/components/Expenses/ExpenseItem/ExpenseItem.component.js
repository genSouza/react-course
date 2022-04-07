/* eslint-disable react/prop-types */
import React from "react";
import CardComponent from "../../UI/Card.component";
import ExpenseDateComponent from "../ExpenseDate/ExpenseDate.component";
import "./ExpenseItem.css";

function ExpenseItemComponent(props) {
  return (
    <li>
      <CardComponent className="expense-item">
        <ExpenseDateComponent date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </CardComponent>
    </li>
  );
}

export default ExpenseItemComponent;
