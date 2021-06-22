import "./ExpenseItemDate.css";

function ExpenseItemDate(props) {
  const month = new Date(props.date).toLocaleString("en-US", {
    month: "long",
  });
  const day = new Date(props.date).toLocaleString("en-US", {
    day: "numeric",
  });
  const year = new Date(props.date).toLocaleString("en-US", {
    year: "numeric",
  });

  return (
    <div className="expense_item__date">
      <div className="expense_item__date__month">{month}</div>
      <div className="expense_item__date__year">{year}</div>
      <div className="expense_item__date__day">{day}</div>
    </div>
  );
}

export default ExpenseItemDate;
