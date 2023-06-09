import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {" "}
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //key is used so react identifies each element in the list
          //so it doesn't change all items when adding a new one to match the previous order
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
