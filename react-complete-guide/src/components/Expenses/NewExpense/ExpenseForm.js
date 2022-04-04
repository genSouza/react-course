import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log(expenseData);
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: 0.01,
  //   date: new Date(),
  // });

  // const titleChangeHandler = (event) => {

  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput({ ...userInput, amount: event.target.value });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput({ ...userInput, date: event.target.value });
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
