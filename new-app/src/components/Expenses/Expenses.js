import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items
      .filter(
        (expense) =>
          expense.date.getFullYear().toString() === filteredYear ||
          expense.date.getFullYear().toString() === 2023
      )
      .map((expense) => {
        return (
          <ExpenseItem
            key={expense.id} //key is used so react identifies each element in the list
            //so it doesn't change all items when adding a new one to match the previous order
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
