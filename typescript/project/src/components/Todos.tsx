//FC stands for Functional Component
//" this FC type is a generic amd I'm using the <> to define the concrete type I want
//which is my own props object where I describe my own props fot this specific Functional Component

import Todo from "../models/todo";

//diferent functional components (FCs) have different props definitions (thats why it is a generic) "
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((e) => (
        <li key={e.id}>{e.text}</li>
      ))}
    </ul>
  );
};

export default Todos;

//build react components with the FC type
//inside the <> define their own custom props with {}
//now is possible to use those props inside the component
