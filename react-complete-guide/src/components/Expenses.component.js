import "./Expenses.css";
import ExpenseItemComponent from "./ExpenseItem.component";
import CardComponent from "./Card.component";

function ExpensesComponent(props) {
  const itens = props.expenses.map((expense, index) => (
    <ExpenseItemComponent
      key={index}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
  return <CardComponent className="expenses"> {itens} </CardComponent>;
}

export default ExpensesComponent;
