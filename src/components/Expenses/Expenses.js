import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

function Expenses(props) {
  const saveExpensesFilterYear = (enteredYear) => {
    const currentYear = enteredYear;
    console.log("hi from expense", currentYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilterYear={saveExpensesFilterYear} />
      <ExpenseItem
        title={props.dataArray[0].title}
        amount={props.dataArray[0].amount}
        date={props.dataArray[0].date}
      />
      <ExpenseItem
        title={props.dataArray[1].title}
        amount={props.dataArray[1].amount}
        date={props.dataArray[1].date}
      />
      <ExpenseItem
        title={props.dataArray[2].title}
        amount={props.dataArray[2].amount}
        date={props.dataArray[2].date}
      />
      <ExpenseItem
        title={props.dataArray[3].title}
        amount={props.dataArray[3].amount}
        date={props.dataArray[3].date}
      />
    </Card>
  );
}

export default Expenses;
