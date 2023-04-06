import { useState } from "react";
// the useState function allows to define values as state
// any change in these value will make the component function be called again
// remember all components are functions
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //useState( default state value )
  //returns an array
  //the first element is the current state value itself (the 'variable')
  //the second element is the update function
  //using destructuring
  const [title, setTitle] = useState(props.title);
  //title is a pointer to props.title

  const newTitleClickHandler = () => {
    setTitle("new title"); //passing the new value as parameter
    //when calling setTitle (the update function)
    //we tell react that a new value is being assigned to this state
    //and this will make react call the component function again
  };

  const resetTitleClickHandler = () => {
    setTitle(props.title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={newTitleClickHandler}>Change title</button>
      <button onClick={resetTitleClickHandler}>reset title</button>
    </Card>
  );
}

export default ExpenseItem;
