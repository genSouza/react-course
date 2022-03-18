import "./Expenses.css";
import ExpenseItemComponent from "./ExpenseItem.component";

function ExpensesComponent(props) {
  const itens = props.expenses.map((expense, index) => (
    <ExpenseItemComponent
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <div className="expenses "> {itens} </div>;
}

export default ExpensesComponent;
