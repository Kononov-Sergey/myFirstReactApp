import React, { useState } from "react";

import ExpensesList from "./ExpensesList.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card.js";
import "./Expenses.css";

function Expenses(props) {
  const [enteredFilterYear, setNewYear] = useState("2022");

  const saveExpensesFilterYear = (event) => {
    setNewYear(event.target.value);
  };

  const filteredExpenses = props.dataArray.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={enteredFilterYear}
        onChangeFilterYear={saveExpensesFilterYear}
      />
      <ExpensesList listOfExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
