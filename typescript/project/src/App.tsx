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

  const removeTodoHandler = (clickedTodoId: string) => {
    setTodos((prevTodos) => {
      //keep all todos with ids different than the one we want to remove
      return prevTodos.filter((todo) => todo.id !== clickedTodoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
