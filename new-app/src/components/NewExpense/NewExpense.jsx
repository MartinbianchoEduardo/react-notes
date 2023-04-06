import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
import "./NewExpense.css";

const NewExpense = () => {
  //IMPORTANT REMEMBER
  //when your state update depends on the previous state
  //pass in the previous state as an argument in a function
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value}
  //   })
  //to ensure it always operate in the actual state

  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
