/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ExpenseItemComponent from "./ExpenseItem/ExpenseItem.component";
import CardComponent from "../UI/Card.component";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";

function ExpensesComponent(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [expensesList, setExpensesList] = useState(props.expenses);

  const filterChangeHandler = (selectedYear) => {
    const sortedExpenseList = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );

    setFilteredYear(selectedYear);
    setExpensesList(sortedExpenseList);
  };

  const items = expensesList.map((expense, index) => (
    <ExpenseItemComponent
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  let expensesMessage = <p>No expenses found.</p>;

  if (expensesList.length > 0) {
    expensesMessage = items;
  }

  return (
    <div>
      <CardComponent className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesMessage}
      </CardComponent>
    </div>
  );
}

export default ExpensesComponent;
