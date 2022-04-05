/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ExpenseItemComponent from "./ExpenseItem/ExpenseItem.component";
import CardComponent from "../UI/Card.component";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";

function ExpensesComponent(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  const itens = props.expenses.map((expense, index) => (
    <ExpenseItemComponent
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return (
    <div>
      <CardComponent className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {itens}
      </CardComponent>
    </div>
  );
}

export default ExpensesComponent;
