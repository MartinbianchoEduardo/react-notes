import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //onSaveExpense will be the prop value (function) we give to the ExpenseForm component
  //so it need to be implemented here in he NewExpense

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //the object generated into the submit handler in ExpenseForm
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* this is how to communicate up (form child to parent) */}
      {/* pass a function from the parent as props to the child */}
      {/* and the child will call the function */}
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
      {/* this function will be passed to ExpenseForm (as a prop) so we can use it there */}
    </div>
  );
};

export default NewExpense;
