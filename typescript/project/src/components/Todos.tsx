//FC stands for Functional Component
//" this FC type is a generic amd I'm using the <> to define the concrete type I want
//which is my own props object where I describe my own props fot this specific Functional Component
//diferent functional components (FCs) have different props definitions (thats wjy it is generic) "
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default Todos;

//build react components with the FC type
//inside the <> define their own custom props with {}
//now is possible to use those props inside the component
