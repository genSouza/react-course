import "./ExpenseItem.css";
function ExpenseItemComponent() {
  const expenseDate = new Date(2022, 2, 18);
  const expenseTitle = "Car insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItemComponent;
