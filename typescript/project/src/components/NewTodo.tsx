import { useRef } from "react";

//NewTodo will receive a function as prop, so we use this syntax ( propName: () => void )
//void here because this onAddTodo function returns nothing
//and we need to specify the parameters as well
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //we need to tell which type of data this ref will get
  //thats why useRef is a generic by default
  //in this case we want to store an input element (so is HTMLInputElement - if it was a button: HTMLButtonElement and os on)
  //and we have to assign a default value inside the () - null because there is no initial value
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //if you are 100% sure that .value will never be null, you can add a ! instead of the ?
    //in this case, it will never be null because the form has to be submited with a value, so the ! could be used
    //"in this case submitHandler cannot be called if the ref connection is not established so we are sure it will not be null"

    //we could use a ? to check if the ref has a current value
    //tries to access value, if that succeeds the value will be stored in enteredText otherwise null will be stored
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //this is validating the text inputed by the user (it could be just blank spaces)
      //theres nothing to do with the ?/! check
      //throw error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
