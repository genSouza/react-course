import "./ExpenseDate.css";
function ExpenseDateComponent(props) {
  const month = props.date.toLocaleString("pt-BR", { month: "long" });
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDateComponent;
