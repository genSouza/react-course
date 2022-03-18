import CardComponent from "./Card.component";
import ExpenseDateComponent from "./ExpenseDate.component";
import "./ExpenseItem.css";

function ExpenseItemComponent(props) {
  return (
    <CardComponent className="expense-item">
      <ExpenseDateComponent date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </CardComponent>
  );
}

export default ExpenseItemComponent;
