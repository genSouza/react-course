/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ExpenseList from "./ExpenseList/ExpenseList";
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

  return (
    <div>
      <CardComponent className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={expensesList} />
      </CardComponent>
    </div>
  );
}

export default ExpensesComponent;
