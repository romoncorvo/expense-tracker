import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const allExpenses = props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  return <Card className="expenses">{allExpenses}</Card>;
}

export default Expenses;
