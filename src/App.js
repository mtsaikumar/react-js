import ExpenseItem from "./components/ExpenseItem";

const data = [
  { date: "August-2020-14", title: "Health Insurance", amount: "300.12" },
  { date: "March-2021-11", title: "Term Insurance", amount: "94.12" },
  { date: "Feb-2019-15", title: "Life Insurance", amount: "15.12" },
  { date: "July-2020-07", title: "Car Loan", amount: "225.00" },
];

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={data[0].date}
        title={data[0].title}
        amount={data[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={data[1].date}
        title={data[1].title}
        amount={data[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={data[2].date}
        title={data[2].title}
        amount={data[2].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
