//FC stands for Functional Component
//" this FC type is a generic amd I'm using the <> to define the concrete type I want
//which is my own props object where I describe my own props fot this specific Functional Component

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//diferent functional components (FCs) have different props definitions (thats why it is a generic) "
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((e) => (
        <TodoItem
          key={e.id}
          text={e.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, e.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

//build react components with the FC type
//inside the <> define their own custom props with {}
//now is possible to use those props inside the component
