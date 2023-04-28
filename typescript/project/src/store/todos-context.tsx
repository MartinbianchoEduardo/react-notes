import Todo from "../models/todo";
import React, { useState } from "react";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
