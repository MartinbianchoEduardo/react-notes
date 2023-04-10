import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //IMPORTANT REMEMBER
  //when your state update depends on the previous state
  //pass in the previous state as an argument in a function
  //   setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value}
  //   })
  //to ensure it always operate in the actual state

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //the onChange gives the (event)
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //event.target.value is the value passed inside the input in the form
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // COMMUNICATE WITH PARENT COMPONENT
    // the function passed from the parent is called here
    // onSaveExpenseData will save the entered data into an object in order to pass it to the parent component
    // execute a function created in a parent component inside a child component by doing this
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler} className="expense-form">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //value field is here to reset the value
            //when changing state without loosing the value entered in the input
            //this is called two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__actions"></div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
