//FC stands for Functional Component
//" this FC type is a generic amd I'm using the <> to define the concrete type I want
//which is my own props object where I describe my own props fot this specific Functional Component

import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

//diferent functional components (FCs) have different props definitions (thats why it is a generic) "
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((e) => (
        <TodoItem
          key={e.id}
          text={e.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, e.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

//build react components with the FC type
//inside the <> define their own custom props with {}
//now is possible to use those props inside the component
