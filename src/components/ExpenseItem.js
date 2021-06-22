import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";

function ExpenseItem(props) {
  return (
    <div className="expense_item">
      <ExpenseItemDate date={props.date} />
      <h3 className="expense_item__title">{props.title}</h3>
      <div className="expense_item__amount">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
