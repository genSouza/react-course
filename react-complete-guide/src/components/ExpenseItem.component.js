import "./ExpenseItem.css";
function ExpenseItemComponent() {
  return (
    <div className="expense-item">
      <div>March 17th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItemComponent;
