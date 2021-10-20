import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

function Expenses(props) {
  const [enteredFilterYear, setNewYear] = useState("2022");

  const saveExpensesFilterYear = (event) => {
    console.log("h");
    setNewYear(event.target.value);
  };

  const filteredExpenses = props.dataArray.filter((expense) => {
    console.log(expense);
    console.log(expense.date.getFullYear().toString());
    console.log(enteredFilterYear);
    return expense.date.getFullYear().toString() === enteredFilterYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={enteredFilterYear}
        onChangeFilterYear={saveExpensesFilterYear}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
