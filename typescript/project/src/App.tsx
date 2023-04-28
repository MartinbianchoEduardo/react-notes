import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  //specify the type of elements of the array <Todo[]> and the starting value (empty array) ([])
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
      //.concat in order to return a new array
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
